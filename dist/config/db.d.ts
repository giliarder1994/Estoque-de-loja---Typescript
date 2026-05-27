import "dotenv/config";
import mysql from "mysql2/promise";
declare const pool: mysql.Pool;
export default pool;
