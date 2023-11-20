const form = document.querySelector('#targetform')

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=:${query}`);
        const data = await response.json();

        const targetdiv = document.querySelector('#results')
        const article = document.createElement('article');
        targetdiv.innerHTML = "";

        const h2 = document.createElement('h2');
        h2.innerHTML = data[0].show.name;
        article.appendChild(h2);

        const a = document.createElement('a');
        a.innerHTML = data[0].show.url;
        a.href = data[0].show.url + 'target="_blank"';
        article.appendChild(a);

        const br = document.createElement('br');
        article.appendChild(br);    

        const img = document.createElement('img');
        img.src = data[0].show.image?.medium;
        img.alt = data[0].show.name;
        article.appendChild(img);

        const summary = document.createElement('div');
        summary.innerHTML += data[0].show.summary;
        article.appendChild(summary);

        targetdiv.appendChild(article);
    } catch (error) {
        console.log(`gave error message: ${error.message}`);
    }
});