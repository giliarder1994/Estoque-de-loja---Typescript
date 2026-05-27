import type { RequestHandler } from "express";
import type { CadastroDTO, LoginDTO } from "../types/index.js";
export declare const cadastrar: RequestHandler<Record<string, never>, unknown, CadastroDTO>;
export declare const login: RequestHandler<Record<string, never>, unknown, LoginDTO>;
