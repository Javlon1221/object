{
    //001
    function createUser(name, age) {
        return { name, age, isAdmin: false };
    }
    
    console.log(createUser("Ali", 25)); 
}

{
    //002
    function sumNumbers(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    
    
    console.log(sumNumbers(3, 4, 6, 10)); 
}


{
    //003
    function displayUserInfo(user) {
        const { name, age } = user;
        return `Name: ${name}, Age: ${age}`;
    }
    
    console.log(displayUserInfo({ name: "Bobur", age: 30 })); 
}

{
    //004

    function objectToArray(obj) {
        return Object.entries(obj);
    }
    
    console.log(objectToArray({ name: "Ali", age: 25 })); 
}

{
    //005

    function getKeysAndValues(obj) {
        return Object.keys(obj);
    }

    console.log(getKeysAndValues({ a: 1, b: 2, c: 3 })); 
}    

{
    //006

    function sumPositiveValues(obj) {
        return Object.values(obj).reduce((acc, val) => (val > 0 ? acc + val : acc), 0);
    }
    
    console.log(sumPositiveValues({ a: -5, b: 10, c: 15 })); 
}
