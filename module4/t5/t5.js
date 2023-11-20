async function myFunction() {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.log(`gave error message: ${error.message}`);
    }
};

myFunction()