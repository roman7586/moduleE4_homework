//задача 3
//Написать функцию, которая создает пустой объект, но без прототипа.
const emptyObj = function () {
    return Object.create(null);
}
console.log(emptyObj());
