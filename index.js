
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

    