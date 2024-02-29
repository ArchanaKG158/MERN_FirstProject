// 2 types of exports
// 1. Named exports -
// ---a. Inline export
// ---b. Grouped export

// 2. Default exports

// inline export of variable and function
export let a = 10;
export const Greeting = () => {
  console.log("Hello from Export");
};

let b = 20;
let c = 30;
// grouped export
const GroupFunction = () => {
  alert("Greeting from export");
};
export { b, c, GroupFunction };
