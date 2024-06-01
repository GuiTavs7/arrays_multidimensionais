let filmes = ["Vingadores", "Mulher Maravilha"];
let descriptionFilme = ["Vingadores", 4.5, true];

let arrayMultidimensional = [ ["Vingadores", 4.5, true], ["Mulher Maravilha", 4.6, false] ];

let arrayMultidimensionalCleanCode = [
                                        ["Vingadores", 4.5, true],
                                        ["Mulher Maravilha", 4.6, false]
                                     ]

console.table(arrayMultidimensional); // print no console em formato de tabela
console.table(arrayMultidimensionalCleanCode); // print no console em formato de tabela

console.table(arrayMultidimensionalCleanCode[0]); // print em formato de tabela do primeiro array completo - Vingadores
console.table(arrayMultidimensionalCleanCode[1]); // print em formato de tabela do segundo array completo - Mulher Maravilha

console.log(arrayMultidimensionalCleanCode[0][0]); // print de "Vingadores" - 0/0
console.log(arrayMultidimensionalCleanCode[0][1]); // print de "4.5" - 0/1
console.log(arrayMultidimensionalCleanCode[0][2]); // print de "true" - 0/2

console.log(arrayMultidimensionalCleanCode[1][0]); // print de "Mulher Maravilha" - 1/0
console.log(arrayMultidimensionalCleanCode[1][1]); // print de "4.6" - 1/1
console.log(arrayMultidimensionalCleanCode[1][2]); // print de "false" - 1/2

let arrayMultidimensionalComOutroArray = [
                                            ["Vingadores", 4.5, true],
                                            ["Mulher Maravilha", 4.6, false, ["Gal Gadot", 25]]
                                         ]

console.table(arrayMultidimensionalComOutroArray[1][3]);
console.log(arrayMultidimensionalComOutroArray[1][3][0]);