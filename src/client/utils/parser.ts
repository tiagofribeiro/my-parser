import { Grammar, Parser, Rule } from "nearley";
import grammar from "./grammar";

export const feedParser = (expr: string) => {
    const parser = new Parser(Grammar.fromCompiled(grammar))

    try {
        parser.feed(expr);

        if (parser.results.length > 0) {
            console.log("Resultado:", parser.results);
            parser.finish()
        } else {
            console.log("Nenhuma correspondência encontrada!");
            parser.finish()
        }
    } catch (ex) {
        console.log(ex)
    }
}

