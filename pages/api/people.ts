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

  const people = await db.all("SELECT id, email, name FROM person");

  res.json(people);
};
