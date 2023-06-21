//Array Filter

let data = [1, 2, 3, 4, 5, 6, 7];
console.log(data);

let result = data.filter((e) => {
  return e > 2;
});

let r = data.filter((w) => w > 2);
console.log(result);
console.log(r);

let data1 = [
  { name: "SCK", salary: 20000, department: "coder" },
  { name: "A", salary: 5000, department: "marketing" },
  { name: "B", salary: 100000, department: "ceo" },
  { name: "C", salary: 30000, department: "banker" },
  { name: "D", salary: 99990, department: "soilder" },
  { name: "E", salary: 2000000, department: "soilder" },
];

let salary = data1.filter((t) => {
  return t.salary > 20000;
});
let salary1 = data1
  .filter((t) => t.salary > 5000)
  .filter((t) => t.department === "soilder");
console.log(salary);
console.log(salary1);
