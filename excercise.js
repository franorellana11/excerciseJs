// 1.
class paintShop {
  //clases
  constructor(name, phoneNumber, address, postalCode, province, country) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.postalCode = postalCode; //propiedades
    this.province = province;
    this.country = country;
  }
  getInfo() {
    //metodo
    return `Name, telephone number and address of the shop is:
     ${this.name},${this.phoneNumber},${this.address}`;
  }
}
// 2.
let paintShop1 = new paintShop(
  "PINTAMIX",
  " 3513236782",
  " Av Duarte Quiros 3956",
  5000,
  " Cordoba ",
  " Argentina "
);
// console.log(paintShop1.getInfo());
let paintShop2 = new paintShop(
  "GARIN",
  " 3513471634",
  "Av.Colon 3987",
  5002,
  "Cordoba",
  "Argentina"
);
// console.log(paintShop2.getInfo());

// 3.
class products extends paintShop {
  constructor(
    name,
    phoneNumber,
    address,
    postalCode,
    province,
    country,
    latex,
    tools
  ) {
    super(name, phoneNumber, address, postalCode, province, country);
    this.tools = tools;
    this.latex = latex;
  }
  getInfo() {
    //metodo
    return `Name, telephone number and address of the shop is:
     ${this.name},${this.phoneNumber},${this.address}`;
  }
  getProducts() {
    return `Products for the client
     ${this.tools}, and latex ${this.latex}`;
  }
}
// 4.
let paintShop3 = new products(
  "TERSUAVE",
  "3513153758",
  "Av.Gral.Paz 4567",
  5001,
  "Cordoba",
  "Argentina",
  "PREMIUM",
  "Keys"
);
// console.log(paintShop3.getInfo());
// console.log(paintShop3.getProducts());

// 5.
const arrayPaintShops = [paintShop1, paintShop2, paintShop3];
// arrayPaintShops.forEach((element) => console.log(element.name));
// console.log(arrayPaintShops.join(" - "));

// 6.
const addToArrayPaintShops = (Object) => arrayPaintShops.push(Object);
// console.log(arrayPaintShops);

let paintShop4 = new products(
  "FADEPA",
  "4564896",
  "Av. Juan B. Justo.",
  5004,
  "Cordoba",
  "Argentina",
  "PROFESIONAL",
  "gripper"
);
// addToArrayPaintShops(paintShop4);
// console.log();
// 7.
// const addID = (arrayPaintShops) => {
//   for (let i = 0; k < arrayPaintShops.length; k++) {
//     Object.defineProperty(arrayPaintShops[i], "ID", {
//       enumerable: true,
//       configurable: true,
//       writable: true,
//       value: k,
//     });
//   }
// };
// addID(arrayPaintShops);
// console.log(arrayPaintShops);
// // 8.
// const arrayObject = (arrayPaintShops) => {
//   let yesObject = true;
//   for (let e = 0; e < arrayPaintShops.length && yesObject == true; e++) {
//     if (typeof arrayObject[e] != "object") {
//       yesObjetc = false;
//     }
//   }
// };

class myCar {
  constructor(make, model, year, km) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.km = km;
  }
}

var myMustang = {
  make: "Ford",
  year: 2005,
};

let saludo = "Hola!";

let numero = 12;

function elevarAlCuadrado(number) {
  return number * number;
}

function divididoEn2(number) {
  return number / 2;
}

function menorA10(number) {
  if (number < 10) {
    return elevarAlCuadrado(number);
  } else {
    return divididoEn2(number);
  }
}

// let var1 = prompt("ingresar numero: ");

// if (var1 > 10) {
//   return "Mayor a 10";
// } else {
//   ("menor a 10");
// }
