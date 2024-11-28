@preprocessor typescript
main -> expression {% ([expression]) => expression %}
expression -> number "+" number {% ([n1, _, n2]) => [n1, n2] %}
number -> [0-9]:+ {% (d) => parseInt(d[0]) %}