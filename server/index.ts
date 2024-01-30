import express, { Express, Request, Response } from "express";
import cors from "cors";
import pool from "./data";
const app : Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || "8000";

//routes 


app.post("/todo" ,async (req : Request,res : Response) => {
    try {
        const { description } = req.body;
        const newSample = await pool.query("INSERT INTO sample (description) VALUES ($1) RETURNING *", [description]);

        res.json(newSample.rows[0]);
    } catch(err) {
        console.log(err);
    } 
});



// const jwtCheck = auth({
//     audience: 'http://localhost:8000/',
//     issuerBaseURL: 'https://dev-zcrh4mqbacadm6rh.us.auth0.com/',
//     tokenSigningAlg: 'RS256'
//   });

app.get("/" , (req : Request,res : Response) => {
    res.send("Discora Backend..!");
});

// app.get('/api/public', function(req, res) {
//     res.json({
//       message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//     });
//   });
  
// app.get('/api/private', checkJwt, function(req, res) {
//     res.json({
//       message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//     });
// });

// app.use(jwtCheck);

// app.get('/autherized', jwtCheck, (req: Request, res : Response) => {
//     res.send('Secured Resource here!!');
// })
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});