let hello;

hello = () => {
    //return "Hello World!";
    console.log("Hello World 1!");
}

hello();

//hello = () => "Hello World 2!";
hello = () => console.log("Hello World 2!");

hello();

// Arrow function with parameters /////////////////////////////////////////
//hello = (val) => "Hello " + val;

hello = (val) => console.log("Hello " + val);

hello("Paul 1");

//hello = val => "Hello " + val;

hello = val => console.log("Hello " + val);

hello("Paul 2");