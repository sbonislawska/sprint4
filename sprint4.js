//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
function sumOfTwo(x, y) {
  const sum = x + y;
  return sum;
}
const sum = sumOfTwo(2, 3);
console.log(sum);

// 2. Napisz funkcję zwracającą długość tablicy
function boardSecond() {
  const numbers = [1, 2, 3, 4, 5];
  const boardLength = numbers.length;
  return boardLength;
}
const boardLength = boardSecond();
console.log(boardLength);
// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
function action(c) {
  const condition = c > 0 && c / 2 ? true : false;
  return condition;
}
const condition = action(4);
console.log(condition);
// 4. Napisz funkcję obliczającą pole kwadratu
function squareArea(a) {
  const area = 4 * a;
  return area;
}
const area = squareArea(5);
console.log(area);

// 5. Napisz funkcję zwracającą odwrotność liczby
function reverse(b) {
  const calculation = 1 / b;
  return calculation;
}
const calculation = reverse(2);
console.log(calculation);

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
function conversion(celsius) {
  const fahrenheit = celsius * 2 + 30;
  return fahrenheit;
}
const fahrenheit = conversion(10);
console.log(fahrenheit);

// 7. Napisz funkcję zwracającą pierwszy element tablicy
function board() {
  const animals = ["cat", "dog", "horse"];
  const removedAnimal = animals.shift();
  return removedAnimal;
}
const removedAnimal = board();
console.log(removedAnimal);
// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string

function connect(first, second) {
  const characters = first + second;
  return characters;
}
const characters = connect("małakaczka", "dużakaczka");
console.log(characters);

// 9. Napisz funkcję zwracającą typ zmiennej
function variableType(z) {
  const variable = typeof z;
  return variable;
}
const variable = variableType("imię");
console.log(variable);
// 10. Napisz funkcję zwracającą absolutną wartość liczby
function absolute() {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function fu1() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
fu1();

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
function fu2() {
  let num = 0;
  while (num < 20) {
    console.log(num);
    num += 2;
  }
}
fu2();
// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function fu3() {
  let nr = 10;
  do {
    console.log(nr);
    nr--;
  } while (nr >= 1);
}
fu3();
// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function fu4() {
  let i = 0;
  while (i < 10) {
    i++;
    console.log(i);
    if (i == 5) {
      break;
    }
  }
}
fu4();
// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
function fu5() {
  const person = {
    name: "Jan",
    surname: "Roguszewski",
    age: 45,
  };
  for (let key in person) {
    console.log(person[key]);
  }
}
fu5();
// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
function fu6() {
  const fruits = ["orange", "kiwi", "plum"];
  for (let item of fruits) {
    console.log(item);
  }
}
fu6();
// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
function fu7() {
  const arr = [10, 30, 40];
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  console.log(suma);
}
fu7();
// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków

function odwroc(txt) {
  let odkonca = "";
  let ile = txt.length;
  let i = 0;
  while (i <= ile) {
    odkonca += txt.charAt(ile - i);
    i++;
  }
  return odkonca;
}
console.log(odwroc("kocham życie"));
// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
function fu9() {
  let liczby = [8, 2, 4, 11];
  let max = liczby[0];
  for (i = 0; i < liczby.length; i++) {
    if (liczby[i] > max) {
      max = liczby[i];
    }
  }
  console.log(max);
}
fu9();
// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
function fu10() {
  const pary = [{ name: "Iwona" }, { eyeColor: "brown" }, { growth: 172 }];
  for (let key in pary) {
    console.log(pary[key]);
  }
}
fu10();

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function blue() {
  const tablica = ["a", "b", "c"];
  const element = tablica.push("d");
  return tablica;
}
const tablica = blue();
console.log(tablica);

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function remove() {
  const ups = [2, 3, 4, 5];
  const ostatni = ups.pop();
  return ups;
}
const ups = remove();
console.log(ups);

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function great() {
  const tablicaA = ["ola", "ala", "ela"];
  const pierwszy = tablicaA.shift();
  return tablicaA;
}
const tablicaA = great();
console.log(tablicaA);

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function white() {
  const tablicaB = ["bolo", "baca", "owen"];
  const dodać = tablicaB.unshift("amor");
  return tablicaB;
}
const tablicaB = white();
console.log(tablicaB);

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function pink() {
  const color = ["white", "black"];
  const newColor = color.push("blue", "green");
  return color;
}
const color = pink();
console.log(color);
// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function green() {
  const colors = ["black", "pink", "red"];
  const oneOf = colors.pop();
  console.log(colors);
  const one = colors.pop();
  return colors;
}
const colors = green();
console.log(colors);

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function red() {
  const table = [1, 2, 3, 4];
  const tableA = table.shift();
  console.log(table);
  const tableB = table.shift();
  return table;
}
const table = red();
console.log(table);

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function yellow() {
  const dress = [1, 2, 3];
  const dressA = dress.unshift(0);
  console.log(dress);
  const dressB = dress.unshift(-1);
  return dress;
}
const dress = yellow();
console.log(dress);
// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function pink() {
  const drink = [5, 3, 6];
  const pu = drink.push(9);
  console.log(drink);
  const po = drink.pop();
  return drink;
}
const drink = pink();
console.log(drink);
// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function water() {
  const fire = [9, 7, 3];
  const fireA = fire.unshift(5);
  console.log(fire);
  const fireB = fire.shift();
  return fire;
}
const fire = water();
console.log(fire);
// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
function car() {
  const audi = [8, 9, 4, 5];
  const powiększ = audi.map((x) => x + 1);
  return powiększ;
}
const powiększ = car();
console.log(powiększ);

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function bus() {
  const water = [3, 6, 8, 9];
  const parzyste = water.map((x) => x % 2 === 0);
  return parzyste;
}
const parzyste = bus();
console.log(parzyste);

// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function taxi() {
  const street = [2, 4, 6];
  const podwoj = street.map((x) => x * 2);
  return podwoj;
}
const podwoj = taxi();
console.log(podwoj);

// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function dog() {
  const kind = [3, 15, 7, 11];
  const większe = kind.filter((x) => x > 10);
  return większe;
}
const większe = dog();
console.log(większe);

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
function flow() {
  const example = "JavaScript";
  const happy = example.slice(0, 4);
  console.log(happy);
  const happyA = example.slice(-6);
  return happyA;
}
const happyA = flow();
console.log(happyA);
// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
function star() {
  const old = ["horse", "fish", "cat"];
  const zam = old.map((x) => x.length);
  return zam;
}
const zam = star();
console.log(zam);
// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
function niewiem() {
  const nie = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nieparz = nie.filter((x) => x % 2 !== 0);
  return nieparz;
}
const nieparz = niewiem();
console.log(nieparz);
// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function abc() {
  const xyz = [2, 4, 6, 8];
  const abca = xyz.map((x) => x * x);
  return abca;
}
const abca = abc();
console.log(abca);
// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function big() {
  const klm = ["pies", "kot", "papuga"];
  const opr = klm.filter((x) => x.length > 3);
  return opr;
}
const opr = big();
console.log(opr);
// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function horse() {
  const race = ["tinker", "folbut", "śląski"];
  const duże = race.map((x) => x.toUpperCase());
  return duże;
}
const duże = horse();
console.log(duże);
