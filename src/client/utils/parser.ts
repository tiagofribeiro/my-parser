import { Grammar, Parser, Rule } from "nearley";
import grammar from "./grammar";

const parser = new Parser(Grammar.fromCompiled(grammar))

export const feedParser = () => {
    parser.feed("bar\n");
    console.log(JSON.stringify(parser.results));
}

