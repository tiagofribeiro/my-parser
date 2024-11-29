// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var number: any;
declare var times: any;
declare var ws: any;

import moo from "moo";

const lexer = moo.compile({
    ws:     /[ \t]+/,
    number: /[0-9]+/,
    times:  /\*/,
    word: { 
        match: /[a-z]+/, 
        type: moo.keywords({ times: "x" }) 
    },
});

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
  Lexer: lexer,
  ParserRules: [
    {"name": "expr", "symbols": ["multiplication"], "postprocess": id},
    {"name": "expr", "symbols": ["trig"], "postprocess": id},
    {"name": "multiplication", "symbols": [(lexer.has("number") ? {type: "number"} : number), "ws_or_empty", (lexer.has("times") ? {type: "times"} : times), "ws_or_empty", (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([first, , , , second]) => first * second},
    {"name": "trig", "symbols": [{"literal":"sin"}, "ws_or_empty", (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([, , x]) => Math.sin(x)},
    {"name": "ws_or_empty", "symbols": []},
    {"name": "ws_or_empty", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]}
  ],
  ParserStart: "expr",
};

export default grammar;
