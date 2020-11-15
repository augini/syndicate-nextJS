import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;

  // open the database
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  //Update the table if method is PUT
  if (req.method === "POST") {
    // Load hash from your password DB.
    const person = await db.get("SELECT * FROM person where email = ? ", [
      req.body.email,
    ]);

    compare(req.body.password, person.password, function (err, result) {
      const claims = { sub: person.id, email: person.email };
      const jwtToken = sign(
        claims,
        "masofa-efgfddf23w44r-gf-sdgdfgd-fg-dfg-dfgdf"
      );

      // result == true
      if (!err && result) {
        res.status(200).json({ authToken: jwtToken });
      } else {
        res.json({ message: "Ups, something went wrong" });
      }
    });
  } else {
    res.json({ message: "Only POST method is supported" });
  }
};
