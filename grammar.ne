@preprocessor typescript
@{%
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
%}

@lexer lexer


expr -> multiplication {% id %} | trig {% id %}

multiplication -> %number ws_or_empty %times ws_or_empty %number {% ([first, , , , second]) => first * second %}

trig -> "sin" ws_or_empty %number {% ([, , x]) => Math.sin(x) %}

ws_or_empty -> null | %ws 