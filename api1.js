

const api_url = 'https://v2.jokeapi.dev/joke/Any?type=single'
document.querySelector(".getjoke").addEventListener("click", () => getjoke());
async function getjoke(){
    const Response = await fetch(api_url);
    const data = await Response.json();
   const { joke, category } = data;
   document.getElementById('showjk').textContent = joke;
   document.getElementById('category').textContent = category;
   
}

getjoke();