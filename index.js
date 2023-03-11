// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
} 
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function destructivelyRemoveLastCat (name) {
    return cats.pop(name);
}
function appendCat(name) {
    const newcats = [... cats, name];
    return newcats;
}
function prependCat(name) {
    const newcats = [name, ... cats];
    return newcats;
}
function removeLastCat() {
    const newcats = cats.slice(0, cats.length - 1);
    return newcats;
}
function removeFirstCat() {
    const newcats = cats.slice(1);
    return newcats;
}