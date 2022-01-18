const obj = {}
let o = "prop"
prop = "prop" in obj ? obj.prop : "default";
console.log(o in obj );