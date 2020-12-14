let placeholder = document.getElementById('searchbar').placeholder;
const movies = ['It', 'Up', 'The Great Gatsby', 'The Life of Pi',
 'The Godfather', 'Home Alone', 'Maze Runner', 'The Incredibles', 
 'Get Out', 'Pixels', 'Tenet', 'Jumanji', 'Jurassic Park', 'Avengers', 
 'The Secret Life of Pets', '21 Jumpstreet', 'Avatar', 'Titanic',
 'Star Wars', 'The Lion King', 'The Hobbit', 'Harry Potter', 'Transformers',
 'Skyfall', 'Spider-Man', 'Toy Story', 'Aladdin', 'Despicable Me', 
 'Finding Nemo', 'Zootopia', 'The Dark Knight', 'Joker', 'Aquaman']

const cyclePlaceholder = () => {
    const movie = movies[Math.floor(Math.random()*movies.length)]
    document.getElementById('searchbar').placeholder = `Search for ${movie}`;
}

setInterval(cyclePlaceholder, 2000);
