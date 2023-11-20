const form = document.querySelector('#targetform')
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = document.querySelector('input[name=q]').value;
    console.log(query);
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=:${query}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
});
