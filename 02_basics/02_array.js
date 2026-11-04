const marvel_heros = ["spiderman", "batman", "superman"]
const disney = ["barbie", "cindrella", "snowwhite"]

//marvel_heros.push(disney);

// marvel_heros.push(disney[3][1]);
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(disney)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...disney]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Fatima"));
console.log(Array.from("Fatima"));
console.log(Array.from({name: "Fatima"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));