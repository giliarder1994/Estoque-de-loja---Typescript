import type { Usuario } from "../types/index.js";
export declare function buscarPorEmail(email: string): Promise<Usuario | undefined>;
export declare function criar(nome: string, email: string, senhaHash: string): Promise<number>;
