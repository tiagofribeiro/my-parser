// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    { "name": "main", "symbols": ["expression"], "postprocess": ([expression]) => expression },
    { "name": "expression", "symbols": ["number", { "literal": "+" }, "number"], "postprocess": ([n1, _, n2]) => [n1, n2] },
    { "name": "number$ebnf$1", "symbols": [/[0-9]/] },
    { "name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
    { "name": "number", "symbols": ["number$ebnf$1"], "postprocess": (d) => parseInt(d[0]) }
  ],
  ParserStart: "main",
};

export default grammar;
