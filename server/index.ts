import express, { Express, Request, Response } from "express";
import cors from "cors";
import pool from "./data";

const app: Express = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;

//for the above path the verification over the jwt wont be used 

app.post("/todo", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newSample = await pool.query("INSERT INTO sample (description) VALUES ($1) RETURNING *", [description]);

    res.json(newSample.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.post("/user/:id", async (req: Request, res: Response) => {
  try {
    const { name, email, img, username, joined, hashtag } = req.body;
    const userId = req.params.id;

    // Check if the user with the provided ID exists
    const existingUserQuery = await pool.query("SELECT name, email, img, username, joined, hashtag FROM \"USER\" WHERE id = $1", [userId]);
    const existingUser = existingUserQuery.rows[0];

    if (existingUser) {
      // User exists, return user details
      res.json(existingUser);
    } else {
      //checking for existance hash and name if not, prompt user to change the hash 
      const existingUserQueryHash = await pool.query("SELECT name, hashtag FROM \"USER\" WHERE name = $1 AND hashtag = $2", [name, hashtag]);
      const existingUserHash = existingUserQueryHash.rows[0];
      if (existingUserHash) {
        res.status(500).json({ error: "Hash in use", code: "HASH_USED" });
        return;
      }
      // User does not exist, insert a new user
      const newUserQuery = await pool.query(
        "INSERT INTO \"USER\" (id, name, email, img, username, joined, hashtag) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING name, email, img, username, joined, hashtag",
        [userId, name, email, img, username, joined, hashtag]
      );

      const newUser = newUserQuery.rows[0];
      res.json(newUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/addfriend", async (req: Request, res: Response) => {
  try {
    const { user_id: userId, friend_id: friendId } = req.body;

    // Insert a new entry into the FRIEND table
    const query = `
      INSERT INTO FRIEND (user_id, friend_ids)
      VALUES ($1, ARRAY[$2])
      ON CONFLICT (user_id) DO UPDATE
      SET friend_ids = array_append(COALESCE(FRIEND.friend_ids, ARRAY[]::VARCHAR[]), $3)
      RETURNING user_id, friend_ids;
    `;
    const { rows } = await pool.query(query, [userId, friendId, friendId]);

    res.json(rows[0]); // Return the inserted/updated row
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getallfriendids/:user_id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.user_id;

    // Retrieve the array of friend IDs for the specified user ID
    const query = `
      SELECT friend_ids
      FROM FRIEND
      WHERE user_id = $1;
    `;
    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      // User not found in FRIEND table
      res.json({ user_id: userId, friend_ids: [] });
    } else {
      // User found, return the array of friend IDs
      res.json({ user_id: userId, friend_ids: rows[0].friend_ids });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/getfrienddetails", async (req: Request, res: Response) => {
  try {
    // Extract the array of friend IDs from the request body
    const friendIds: string[] = req.body.friend_ids;

    // Query the details of each friend using the friend IDs
    const query = `
      SELECT id, name, email, img, username, joined
      FROM "USER"
      WHERE id = ANY($1);
    `;
    const { rows } = await pool.query(query, [friendIds]);

    // Map the query results to an array of friend details
    const friendDetails = rows.map((friend: any) => ({
      id: friend.id,
      name: friend.name,
      email: friend.email,
      img: friend.img,
      username: friend.username,
      joined: friend.joined
    }));

    // Return the array of friend details in the response
    res.json(friendDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getuser/:id", async (req: Request, res: Response) => {
  try {
    const existingUserQuery = await pool.query("SELECT name, email, img, username, joined, color FROM \"USER\" WHERE id = $1", [req.params.id]);
    const existingUser = existingUserQuery.rows[0];

    if (existingUser) {
      res.json(existingUser);
    } else {
      console.log("Can't find the user which is asked here");
      res.status(404).json({ error: "can't find the user" });
    }
  } catch (e: any) {
    console.error(e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





// make the user friend's section here now and connect it over the db (plan the entire schema for the user 1v1 chat)
app.get("/", async (req: Request, res: Response) => {
  res.send("Discora Backend!!! \n designed by HSM \n © 2024 Discora. All rights reserved.")
})
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});