/*
JS EXECUTION CONTEXT:(EC)

--> Global EC, using this -> for browser returns Window object
JS is single threaded

two types of EC:
1> Global EC
2> Function EC
//3> Eval EC(in mogoos)

THE EXECUTION PHASES:
1 -> Global execution phase -> this
2 -> Memory phase   -> in this all the var are initialized, with their values as undefined, fn is init by its definition
3 -> Execution phase -> values are given to variables, when the fn execution line comes, then:
a new variable environment and execution thread are formed, which will have its own memory and execution phase
the return value is pushed into the global phase
once done, this env is deleted


*/