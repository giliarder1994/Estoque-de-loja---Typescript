import type { RequestHandler } from "express";
import type { ProdutoDTO } from "../types/index.js";
interface ListarQuery {
    categoria?: string;
    pagina?: string;
    limite?: string;
}
interface IdParams {
    id: string;
}
export declare const listarProdutos: RequestHandler<Record<string, never>, unknown, unknown, ListarQuery>;
export declare const buscarUm: RequestHandler<IdParams>;
export declare const criar: RequestHandler<Record<string, never>, unknown, ProdutoDTO>;
export declare const editar: RequestHandler<IdParams, unknown, ProdutoDTO>;
export declare const deletar: RequestHandler<IdParams>;
export {};
