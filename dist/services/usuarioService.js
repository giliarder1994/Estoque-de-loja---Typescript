import pool from "../config/db.js";
export async function buscarPorEmail(email) {
    const [rows] = await pool.execute("SELECT * FROM usuarios WHERE email = ?", [email]);
    return rows[0];
}
export async function criar(nome, email, senhaHash) {
    const [result] = await pool.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senhaHash]);
    return result.insertId;
}
//# sourceMappingURL=usuarioService.js.map