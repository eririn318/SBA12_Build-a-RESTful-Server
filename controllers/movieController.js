const axios = require("axios")
///http://localhost:4000/api/movies/search/?title=batman
//http://localhost:4000/api/movies/search/?title=Titanic in postman
// GET /api/search

//list of movie
async function searchMovies(req, res) {
    const title = req.query.title?.trim()
    if(!title) {
        return res.status(400).json({ "error": "Title query parameter is required" })
    }
    try{
        const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`)
        res.json(response.data.Search);
    }catch(error){

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
          }


    }
  }
//http://localhost:4000/api/movies/tt0372784
// /api/movies/tt0372784
  //   GET /api/movies/:id
  async function getMovieDetails(req, res) {
    const id = req.params.id?.trim()
    if(id===undefined) {
        return res.status(400).json({ "error": "Id parameter is required" })
    }
    try{
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`)
        res.json(response.data);
    }catch(error){

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.error('Network Error:', error.message);
        //     res.status(500).json({ message: 'A network error occurred.' });
           }

    }

  }



  module.exports = {
    searchMovies,
    getMovieDetails}


//   function getUserById(req, res) {
//     res.send(`Data for user: ${req.params.id}`);
//   }
//   module.exports = {
//     getAllUsers,
//     getUserById,
//   };



//response =sending data to front end
//request = information from front end on what data to retreive backend