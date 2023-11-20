const form = document.querySelector('#targetform')

form.addEventListener('submit', async function chucknorris(evt) {
    evt.preventDefault();
    const query = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const data = await response.json();
        for (let i = 0; i < data.total; i++) {
            const article = document.createElement('article');
            const para = document.createElement('p');
            para.innerHTML = data.result[i].value;
            article.appendChild(para);
            document.body.appendChild(article);
        }
    } catch (error) {
        console.log(`gave error message: ${error.message}`);
    }
});