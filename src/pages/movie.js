export const MoviePage = (render) => {
    const template =/*html*/ `
    <div>
        <p id='title'></p><hr>
        <p id='popularity'></p><hr>
        <p id='original_language'></p><hr>
        <p id='overview'></p><hr>
        <p id='vote_average'></p>
    </div>
      `;
    render(template);

    const axios = require('axios');
        axios.get('https://api.themoviedb.org/3/movie/220?api_key=4f9b09b41835b16489ca663662029a70&language=it')
        .then(response => {
            document.getElementById('title').innerHTML = 'Titolo: ' + response.data.original_title
            document.getElementById('popularity').innerHTML = 'Popolarità: ' + response.data.popularity
            document.getElementById('original_language').innerHTML = 'Lingua Originale: ' + response.data.original_language
            document.getElementById('overview').innerHTML = 'Riassunto: ' + response.data.overview
            document.getElementById('vote_average').innerHTML = 'Voto Medio: ' + response.data.vote_average
        }
    )
  };