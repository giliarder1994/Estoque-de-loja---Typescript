import pool from "../config/db.js";
export async function buscarTodos(categoria, limite, offset) {
    let sql = "SELECT * FROM produtos";
    const params = [];
    if (categoria) {
        sql += " WHERE categoria = ?";
        params.push(categoria);
    }
    sql += " LIMIT ? OFFSET ?";
    params.push(limite, offset);
    const [rows] = await pool.execute(sql, params);
    return rows;
}
export async function buscarPorId(id) {
    const [rows] = await pool.execute("SELECT * FROM produtos WHERE id = ?", [id]);
    return rows[0];
}
export async function salvar(dados) {
    const { nome, preco, quantidade, categoria } = dados;
    const [result] = await pool.execute("INSERT INTO produtos (nome, preco, quantidade, categoria) VALUES (?, ?, ?, ?)", [nome, preco, quantidade, categoria ?? null]);
    return { id: result.insertId, ...dados };
}
export async function atualizar(id, dados) {
    const { nome, preco, quantidade, categoria } = dados;
    const [result] = await pool.execute("UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria = ? WHERE id = ?", [nome, preco, quantidade, categoria ?? null, id]);
    return result.affectedRows > 0;
}
export async function remover(id) {
    const [result] = await pool.execute("DELETE FROM produtos WHERE id = ?", [id]);
    return result.affectedRows > 0;
}
//# sourceMappingURL=produtoService.js.map