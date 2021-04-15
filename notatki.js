var tekst = 'tekst';


// https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Grammar_and_types
// Typy zmiennych
// var - ZAPOMINAMY, ŻE ISTNIEJE
// let, const

//Typy danych:
//
// Sześć typów danych rodzaju primitives:
//  Boolean. true oraz false.
//  null. Specjalne słowo kluczowe oznaczające wartość zerową. Ponieważ w języku JavaScript rozróżniana jest wielkość liter,
//  null nie jest tym samym co Null, NULL lub jakikolwiek inny wariant.
//  undefined. Najwyższa właściwość, której wartość jest nieokreślona.
//  Number. 42 lub 3.14159.
//  String. "Uszanowanko"
//  Symbol (nowość w ECMAScript 6). Typ danych, gdzie przykłady są niepowtarzalne i niezmienne.


// oraz typ złożony
// Object (do którego można również zaliczyć podtypy functions i array)

let tekst = 'tekst';
tekst
//"tekst"
tekst = 'tekst123';
tekst
//"tekst123"

const tekst2 = 'tekst2';
// tekst2 = 'tekst222222';  // nie możemy zmieniać wartości zmiennej typu const
// Uncaught TypeError: Assignment to constant variable.

tekst.charAt(2); // zwraca konkretny znak
// "k"

tekst.charCodeAt(2); // zwraca unicode znaku
// 107

tekst.includes('ks');
// true

let zmienna = 'hello world';

zmienna.split(' ');
// (2) ["hello", "world"]
// 0: "hello"
// 1: "world"
// length: 2
// __proto__: Array(0)

zmienna.trim();
// "hello world"

zmienna.toUpperCase();
// "HELLO WORLD"
zmienna
// "hello world"

zmienna.toLowerCase();
// "hello world"

zmienna = 'kota';
// "kota"

console.log('Ala ma ' + zmienna);
// "Ala ma kota"


// Template strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
`Ala ma ${zmienna}`;
// "Ala ma kota"

`Ala ma                                 ${zmienna}`;
//"Ala ma                                 kota"

let number = 3.5;

// porównania i operatory logiczne
// https://www.w3bai.com/pl/js/js_comparisons.html

const x = new Number(10);
const y = 10;

x === y;
// false
// === porównuje też Typy
x == y;
// true


Number.isFinite(250);
// true
Number.isFinite(-120.33);
// true
Number.isFinite(1/3);
// true
Number.isFinite(Math.PI);
// true
Number.isFinite(0/0);
// false
Number.isFinite(Infinity);
// false

let liczba = 1.2342515;
liczba.toFixed(2);
// "1.23"
liczba.toFixed(4);
// "1.2343"

Math.E
// 2.718281828459045
Math.PI
// 3.141592653589793

Math.PI.toFixed(30)
// "3.141592653589793115997963468544"
Math.PI.toFixed(50)
// "3.14159265358979311599796346854418516159057617187500"

Math.floor(3.16);
// 3
Math.pow(2,4);
// 16

Math.random();
// 0.23605117522417607
Math.random();
// 0.6417895378308112
Math.random();
// 0.09244353303010011
Math.random();
// 0.3347576737083142

// Typ Boolean

let boolean = true;
boolean
// true
boolean = false;
boolean
// false

Boolean(50);
// true
Boolean(true);
// true
Boolean(false);
// false
Boolean('tekst');
// true
Boolean('');
// false
Boolean({});
// true
Boolean(0);
// false
Boolean(2);
// true
Boolean(-2);
// true

// Tablice

let tablica = [1,2,3,4,5, 'siedem', true, false];
tablica
// (8) [1, 2, 3, 4, 5, "siedem", true, false]
tablica.length
// 8

tablica.join()
"1,2,3,4,5,siedem,true,false"



// instrukcje warunkowe

if(true) {console.log('test')}
// test
if(1) {console.log('test')}
// test
if(0) {console.log('test')}
// undefined
if(tablica.length) {console.log('test')}
// test

// funkcja map()
// https://geek.justjoin.it/jak-dzialaja-map-filter-i-reduce-w-javascript

let tablica = [1,2,3,4,5];
tablica = [1,2,3,4,5,6];

const tablica2 = tablica.map((wartosc, index)=>{return wartosc+index})
tablica2
// (6) [1, 3, 5, 7, 9, 11]

tablica.forEach((wartosc) => {console.log(wartosc)});
// 1
// 2
// 3
// 4
// 5
// 6

tablica[0] = 'element';
tablica
// (6) ["element", 2, 3, 4, 5, 6]


// Obiekty

let obiekt = {};
obiekt
// {}

obiekt = {
  autor: 'Adam Nowak'
};
// {autor: "Adam Nowak"}

obiekt = {
  autor: 'Adam Nowak',
  tytul: 'Biografia',
};
// {autor: "Adam Nowak", tytul: "Biografia"}

// Funkcje
const funkcja = (param) => {return param}
funkcja('tekst')
// "tekst"

const funkcja2 = (param) => param;
funkcja2
// (param) => param
funkcja2('tekst')
// ​"tekst"

let funkcja3 = (param) => ({obiekt: param});
funkcja3('tekst');
// {obiekt: "tekst"}


// switch

switch(zmienna) {
  case 0:
    //kod
    break;
  case 1:
    //kod
    break;
  default:
    //kod domyślny
}

const tab = ['jeden', 'dwa', 'trzy'];
for (let index = 0; index < tab.length; index++) {
  console.log(tab[index]);
}
// jeden
// dwa
// trzy

obiekt
// {autor: "Adam Nowak", tytul: "Biografia"}

for (let index in obiekt) {
  console.log(index);
  console.log(obiekt[index]);
}

// autor
// Adam Nowak
// tytul
// Biografia

const napis = 'tekst';
for (let znak of napis) {
  console.log(znak);
}

// t
// e
// k
// s
// t


// npx create-react-app react-ts --template typescript