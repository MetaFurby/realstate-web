import "./styles/index.css";
const randomAux = {
    aux1 : 1,
    aux2 : 2,
    aux3 : 3,
}

const randomAux2 = {
    ...randomAux,
    aux4 : 4,
    aux3 : 3,
}

console.log(randomAux);
console.log(randomAux2);