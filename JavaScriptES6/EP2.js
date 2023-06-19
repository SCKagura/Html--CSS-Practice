//Arrow Function

//เขียนแบบปกติ

function fullname(fname, lname) {
  return fname + lname;
}

console.log(fullname("SCK", "agura"));

Fullname = (fname, lname) => fname + lname;
console.log(fullname("I'm", "SCKagura"));

Setage = (Age) => "อายุ = " + Age;
console.log(Setage(40));
