import { Grammar, Parser, Rule } from "nearley";
import grammar from "./grammar";
import math from "./math";

const parser = new Parser(Grammar.fromCompiled(math))

export const feedParser = (expr: string) => {
    parser.feed(expr);

    if (parser.results.length > 0) {
        console.log("Resultado:", parser.results);
    } else {
        console.log("Nenhuma correspondência encontrada!");
    }
}

