import jwt from "jsonwebtoken";
export function autenticar(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ erro: "Token não fornecido" });
        return;
    }
    const [, token] = authHeader.split(" ");
    if (!token) {
        res.status(401).json({ erro: "Formato de token inválido" });
        return;
    }
    try {
        const secret = process.env["JWT_SECRET"] ?? "secret";
        const payload = jwt.verify(token, secret);
        req.usuario = payload;
        next();
    }
    catch {
        res.status(401).json({ erro: "Token inválido ou expirado" });
    }
}
//# sourceMappingURL=auth.middleware.js.map