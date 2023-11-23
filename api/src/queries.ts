import { Request, Response } from "express";
import { Pool, QueryResult } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};
connectToDB();

/** CRUDs for Person DB */

const getPersons = (req: Request, resp: Response) => {
  pool.query(
    `SELECT * FROM person ORDER BY person_id ASC`,
    (er: Error, res: QueryResult): void => {
      if (er) {
        throw er;
      } else {
        resp.status(200).json(res.rows);
      }
    }
  );
};

export default { getPersons };
