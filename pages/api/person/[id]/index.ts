import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;

  // open the database
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  //Update the table if method is PUT
  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE person SET name= ?, email = ? where id = ?"
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
  }

  const person = await db.all("SELECT * FROM person where id = ?", [
    req.query.id,
  ]);

  res.json(person);
};
