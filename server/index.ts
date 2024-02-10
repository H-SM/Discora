import express, { Express, Request, Response } from "express";
import cors from "cors";
import pool from "./data";

const app : Express = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;

//for the above path the verification over the jwt wont be used 

app.post("/todo" ,async (req : Request,res : Response) => {
    try {
        const { description } = req.body;
        const newSample = await pool.query("INSERT INTO sample (description) VALUES ($1) RETURNING *", [description]);

        res.json(newSample.rows[0]);
    } catch(err) {
        console.log(err);
    } 
});

app.post("/user/:id" ,async (req : Request,res : Response) => {
    try {
        const { name, email, img, username, joined, color } = req.body;
        const userId = req.params.id;
    
        // Check if the user with the provided ID exists
        const existingUserQuery = await pool.query("SELECT name, email, img, username, joined, color FROM \"USER\" WHERE id = $1", [userId]);
        const existingUser = existingUserQuery.rows[0];
    
        if (existingUser) {
          // User exists, return user details
          res.json(existingUser);
        } else {
          // User does not exist, insert a new user
          const newUserQuery = await pool.query(
            "INSERT INTO \"USER\" (id, name, email, img, username, joined, color) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING name, email, img, username, joined, color",
            [userId, name, email, img, username, joined, color]
          );
    
          const newUser = newUserQuery.rows[0];
          res.json(newUser);
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

app.get("/getuser/:id", async (req : Request,res : Response) => {
    try{
      const existingUserQuery = await pool.query("SELECT name, email, img, username, joined, color FROM \"USER\" WHERE id = $1", [req.params.id]);
      const existingUser = existingUserQuery.rows[0];
  
      if (existingUser) {
        res.json(existingUser);
      } else {
        console.log("Can't find the user which is asked here");
        res.status(404).json({error : "can't find the user"});
      }
    }catch(e : any){
      console.error(e.message);
      res.status(500).json({ error: "Internal Server Error"});
    }
});

app.get("/",async (req:Request, res : Response) => {
    res.send("Discora Backend!!! \n designed by HSM \n © 2024 Discora. All rights reserved.")
})
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});