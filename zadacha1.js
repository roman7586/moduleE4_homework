//задача 1
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const one = {
    object1: "attr1"
}

const two = Object.create(one);
    two.object2 = "attr2";

function keys(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`${key}: ${object[key]}`);
                                        }
                            }
                      }
keys(two)
