// Q1 Write a program to greet a person given their first and last name
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("MD ATIF RAZA");
// Q2 Write a program that greets a person based on their gender .(If-else)
function greet(name, gender) {
    if (gender == "male") {
        console.log(`Hello Mr. ${name}`);
    }
    else if (gender == "female") {
        console.log(`Hello Mrs. ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}

greet("MD ATIF RAZA", "male")

greet("Mrs RAZA", "female")
// Q3 


