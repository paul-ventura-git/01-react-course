class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    presentation() {
        //return `This is a ${this.year} ${this.make} ${this.model}`;
        console.log(`This is a ${this.year} ${this.make} ${this.model}`);
    }
}

class Coupe extends Car {
    constructor(make, model, year, typeOfCar){
        super(make, model, year);
        if (typeOfCar=="Coupe"){
            this.typeOfCar="Coupe"
        }
        
    }

    show() {
        //return `This is a ${this.year} ${this.make} ${this.model} ${this.typeOfCar}`;
        console.log(`This is a ${this.year} ${this.make} ${this.model} ${this.typeOfCar}`);
    }
}

const myCar1 = new Car("Ford", "Mustang", "2024");
myCar1.presentation();

const myCar2 = new Coupe("Ford", "Carrera", "2024", "Coupe")
myCar2.presentation();
myCar2.show();