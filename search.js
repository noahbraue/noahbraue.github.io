const source = document.getElementById('movieinfo-template').innerHTML;

const template = Handlebars.compile(source);

const displayMovieInfo = movieJson => {
    const movieContext = {
        title: movieJson.Title,
        year: movieJson.Year,
        plot: movieJson.Plot,
        poster: movieJson.Poster,
        runtime: movieJson.Runtime
    }
    const compiledHtml = template(movieContext);
    document.getElementById('info').innerHTML = compiledHtml;
}


const searchBar = document.getElementById("searchbar");
const apiKey = '9b296a98';

const getResponse = async () => {
    try {
        const name = searchBar.value;
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`);
        if(response.ok){
            const movieJson = await response.json();
            console.log(movieJson);
            displayMovieInfo(movieJson);
        }
    } catch (error) {
        console.log(error);
    }
}

const verifyKey = () => {
    if(event.key == 'Enter'){
        event.preventDefault();
        getResponse();
    } else {
        return false;
    }
}