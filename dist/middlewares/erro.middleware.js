export const erroMiddleware = (erro, _req, res, _next) => {
    console.error("[Erro não tratado]", erro);
    res.status(500).json({ erro: "Erro interno do servidor" });
};
//# sourceMappingURL=erro.middleware.js.map