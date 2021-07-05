const name = "elephant";
const size = ["small", "medium", "huge"];
const talons = true;

const animal = {
  name: name,
  size: size,
  talons: true,
};
console.log(animal);

const capital = "Hanoi";
const continent = "Asia";

const vietnam = {
  capital,
  continent,
};

console.log(vietnam);

const wheelsCount = 4;
const doorsCount = 4;
const color = "black";

const car = {
  wheelsCount,
  doorsCount,
  color,
};

console.log(car);

function getAverage(obj) {
  const { x, y, z } = obj;

  return Math.floor((x + y + z) / 3.0);
}

console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }));

function getAddress(obj) {
  const {
    city,
    country,
    address: { number, street, district },
  } = obj;

  return city === "HCMC", country === "Vietnam", street === "Ton Dan";
}

console.log(
  getAddress({
    city: "HCMC",
    country: "Vietnam",
    address: {
      number: 12,
      street: "Ton Dan",
      district: "4",
    },
  })
);

function objectifyElements(arr) {
  const first = arr[0];
  const second = arr[1];
  const third = arr[2];
  const fourth = arr[3 + 1];

  return { fourth }; // CHANGE ME
}

console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4);

function getFoodItems() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  const carrots = food[0][0];
  const cookies = food[2][0];
  const mangos = food[1][1]; // CHANGE ME

  return { carrots, cookies, mangos }; // CHANGE ME
}

console.log(getFoodItems().mangos === "mangos");

function getHistoricPrices(index) {
  const bingo = index[2];
  return bingo;
}

console.log(getHistoricPrices([true, false, true]));

function getHistoricPrices2(index) {
  const bingo = index[0][0];
  // CHANGE ME
  return bingo;
}

console.log(
  getHistoricPrices2([
    [true, false],
    [false, true],
  ])
);

function getHistoricPrices3(index) {
  const bingo = index[0][0][0]; // CHANGE ME
  return bingo;
}

console.log(
  getHistoricPrices3([
    [
      [true, false],
      [true, false],
    ],
  ])
);

// section 4
function restParams(first, ...rest) {
  return first === "first" && rest[0] === "second" && rest[1] === "third";
}

console.log(restParams("first", "second", "third")); // CHANGE ME

function restParams2(first, ...rest) {
  return first === "first" && rest[0] === "second" && rest[1] === "third";
}

console.log(restParams2("first", "second", "third")); // CHANGE ME

function restParams3(first, ...rest) {
  return (
    first === "first" &&
    rest[0] === "second" &&
    rest[1] === "third" &&
    rest[2] === undefined
  );
}

console.log(restParams3("first", "second", "third", undefined)); // CHANGE ME

function restParams4(...rest) {
  return rest[0] === "first" && rest[1] === "second" && rest[2] === "third"; // CHANGE ME
}

console.log(restParams4("first", "second", "third"));

function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {
    one: array[0],
    two: array[1],
    three: array[2],
    rest: array.slice(3),
  };

  return object;
}
console.log(ontoAnObject());

function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];
  const both = [...arr1, ...arr2];
  console.log(both);
  return Math.max(...both);
}
console.log(findTheMax());

function concatenateArrays() {
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const result = [...arr1, ...arr2, ...arr3];
  return result;
}
console.log(concatenateArrays());

function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };
  const result = { ...obj1, ...obj2 };
  return (
    result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g === "g from obj2" &&
    result.d.h === "h from obj2"
  );
}
console.log(mergeObjects());

// Section 5
function multiArgument() {
  // CHANGE BELOW
  const divide = function (a, b) {
    return a / b;
  };
  return divide(40, 10);
}
