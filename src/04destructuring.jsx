const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message);
  }

  const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicleTwo(vehicleTwo)
  
  function myVehicleTwo({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log(message);
  }