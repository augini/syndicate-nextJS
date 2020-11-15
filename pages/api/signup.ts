import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { hash } from "bcrypt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;

  // open the database
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  //Update the table if method is PUT
  if (req.method === "POST") {
    hash(req.body.password, 10, async (err, hash) => {
      const statement = await db.prepare(
        "INSERT INTO person (name, email, password) values (?,?,?) "
      );
      const result = await statement.run(req.body.name, req.body.email, hash);
      const people = await db.all("SELECT * FROM person", [req.query.id]);
      res.json(people);
    });
  } else {
    res.json({ message: "Only POST method is supported" });
  }
};
