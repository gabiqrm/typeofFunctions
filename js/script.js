'use strict'; //Acusar mais erros

//  var x let

//var tem escopo abrangente
//let tem escopo reduzido
// const - Não podemos retribuir valores

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }
  i = 20;
  console.log(i);
}
withVar();


function sum(a,b){
  return a + b;
}
console.log(sum(2,4));

// função anônima

const sum2 = function(a,b){
  return a+ b;
};
console.log(sum2(2,8));

//arrow function

const sum3 = (a,b) => {
  return a + b;
};
console.log(sum3(2,6));

//arrow function reduzida

const sum4 =  (a,b) =>  a + b;
console.log(sum4(2,2));

//template literals

const name = 'Gabriela';
const surName = 'Queiroz';
const text1 = 'Meu nome é ' + name + ' ' +surName;

const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

const sum5 = (a, b=10) => a + b;
console.log(sum5(2));
console.log(sum5(2,8));
