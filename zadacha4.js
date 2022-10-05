//Задание 4.4
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
//
//План:
//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создать экземпляры каждого прибора.
//Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

function Computer(name,power) {
    this.name = name;
    this.power = power;
    this.getSwitch = function (turnOn) {
        console.log(this.name + ' в состоянии ' + turnOn);
        if (turnOn === 'on') {
          sumpower = parseInt(sumpower)+parseInt(this.power);
         }
    }
}

function TableLamp(name, lumen, power){
    this.name = name;
    this.lumen = lumen;
    this.power = power;
    this.getLamp = function (){
        console.log(`Настольная лампа с освещённостью в ${lumen} люменов`)}
}
TableLamp.prototype = new Computer();

let sumpower=0;
const lamp = new TableLamp('Лампа', 600, 40);
const intel = new Computer('Компьютер Интел', 2100);
const makbook = new Computer('Компьютер макбук', 1500);

lamp.getSwitch('on')
intel.getSwitch('on')
makbook.getSwitch('on')
lamp.getLamp()

if (sumpower > 3000){
  console.log(`Общая используемая мощность ${sumpower} Вт. Сеть перегружена!!!`);
} else {
  console.log(`Общая используемая мощность ${sumpower} Вт. Сеть стабильна!!!`);
}
