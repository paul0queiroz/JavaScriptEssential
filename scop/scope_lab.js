// function Scop

function show() {
  var FunctionVar = "i'm a function var";
  let FunctionLet = "i'm a function var too, but with let scop";
  const FunctionConst = "i'm a function Const";
  console.log(FunctionVar, FunctionLet, FunctionConst);
}
show();

{
  //Block Scop
  var blockVar = "Eu sou uma var com escopo de bloco";
  let blockLet = "Eu sou um let com escopo de bloco";
  const blockConst = "Eu sou um const com escopo de bloco";
}

//function Scop
console.log(FunctionVar);
console.log(FunctionLet);

//Block Scop
//console.log(blockVar);
//console.log(BlockLet);
