//Default Parameter

function data(Name, Cusadress = "นรก") {
  /*if (!Cusadress) {
    Cusadress = "นรก";
  } */
  const adress = `ชื่อลูกค้า : ${Name}
    ทีอยู่ : ${Cusadress} `;
  return adress;
}

console.log(data("คนลาบๆควรไปนอน", "ชายเหมี่ยง"));

console.log(data("คนลาบๆ"));
