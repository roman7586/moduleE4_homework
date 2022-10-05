//задание 4.5
//Переписать консольное приложение из предыдущего юнита на классы.
//Общие требования:
//Имена классов, свойств и методов должны быть информативными;
//Соблюдать best practices;
//Использовать синтаксис ES6.

class Computer {
   constructor (name,power){
       this.name = name;
       this.power = power;
       this.turnOn = false;
       this.activePower = function () {
       if (this.turnOn === true){
           return this.power
       } else {
           return 0;
              }
       }
       this.setSwitch = function (include) {
           console.log(this.name + ' в состоянии ' + include);
           if (include === 'on') {
               this.turnOn = true;
           } else {
            this.turnOn = false;
            }
       }
   }
}

class TableLamp extends Computer{
    constructor(name, lumen, power){
        super(name,power);
        this.lumen = lumen;
        this.getLamp = function (){
            console.log(`Настольная лампа с освещённостью в ${lumen} люменов`)
        }
    }
}

const lamp = new TableLamp('Лампа', 600, 40);
const intel = new Computer('Компьютер Интел', 2100);
const makbook = new Computer('Компьютер макбук', 1500);

lamp.setSwitch('on')
intel.setSwitch('off')
makbook.setSwitch('on')
lamp.getLamp()

let sumpower = 0;

sumpower += lamp.activePower()
sumpower += intel.activePower()
sumpower += makbook.activePower()

if (sumpower > 3000) {
    console.log(`Общая используемая мощность ${sumpower} Вт. Сеть перегружена!!!`);
} else {
    console.log(`Общая используемая мощность ${sumpower} Вт. Сеть стабильна!!!`);
}
