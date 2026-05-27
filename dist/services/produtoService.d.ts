import type { Produto, ProdutoDTO } from "../types/index.js";
export declare function buscarTodos(categoria: string | undefined, limite: number, offset: number): Promise<Produto[]>;
export declare function buscarPorId(id: number): Promise<Produto | undefined>;
export declare function salvar(dados: ProdutoDTO): Promise<Produto>;
export declare function atualizar(id: number, dados: ProdutoDTO): Promise<boolean>;
export declare function remover(id: number): Promise<boolean>;
