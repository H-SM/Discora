import express, { Express, Request, Response } from "express";
import cors from "cors";
import pool from "./data";

const app : Express = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8080;

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

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});