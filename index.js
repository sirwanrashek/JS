
        // This is a simple JavaScript code that
        // logs "Hello, World!" to the console
        console.log("Hello, World!");
   
    let name;
    name = "John Doe";
    console.log(name); // Output: undefined


    let person = {
        name: "Alice",
        age: 30,   
    };
    console.log(person); //siehe Konsole bei live server
    console.log(person.name); // Output: Alice      
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers);   

    function greet(name) {
        return "Hello, " + name +" wie geht es dir?"+ "!";
    }   
    console.log(greet("Alice")); // Output: Hello, Alice!

    //dot notation
    let person2 = {
        name: "Bob",
        age: 25,
    };
    console.log(person2.name); // Output: Bob   

    //bracket notation
    let person3 = {
        name: "Charlie",
        age: 35,
    };
    console.log(person3["name"]); // Output: Charlie

    let selection = 'name';
    person3[selection] = "David";
    console.log(person3.name); // Output: David

    let selectedColor = ["red", "green", "blue"];
    console.log(selectedColor[0]); // Output: red
    console.log(selectedColor[1]); // Output: green
    console.log(selectedColor.length); // Output: 3

    //Functions
    function add(a, b) {
        return a + b;
    }
    
    function greet() {
        return "Hello, World!";
    }
    
    console.log(add(2, 3)); // Output: 5
    console.log(greet()); // Output: Hello, World!

    function greet2(name) {
       console.log("Hello, " + name + "!");
   
    }
    greet2("Alice"); // Output: Hello, Alice!
    greet2("Bob"); // Output: Hello, Bob

    //Performing a task
    function greet3(name, lastName3) {
        return "Hello, " + name + ''+ lastName3 + "!";
    }

    greet3("Alice", "Smith"); // Output: Hello, Alice!
    

    function square(number) {
        return number * number;
    }
    console.log(square(5)); // Output: 25




    




    