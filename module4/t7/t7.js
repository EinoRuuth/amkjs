const form = document.querySelector('#targetform')

form.addEventListener('submit', async function chucknorris(evt) {
    evt.preventDefault();
    const query = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    } catch (error) {
        console.log(`gave error message: ${error.message}`);
    }
});