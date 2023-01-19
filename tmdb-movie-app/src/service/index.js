import axios from 'axios'

const apiKey = 'd4da566d6202b6238607a02cf39337cf';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/popular`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const discoverUrl = `${url}/discover/movie`;
const trendingUrl = `${url}/trending/all/week`;
const getGenreUrl = `${url}/discover/movie`;
const searchMovieUrl = `${url}/search/movie`;

export const fetchMovies = async () => {
    try {
        const res = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })


       

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = res.data.results.map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'] || m['name'] || m['original_name'] ,
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        

        return modifiedData;
    } catch (error) { }
}
export const fetchSearchMovieUrl = async (query) => {
    try {
        const res = await axios.get(searchMovieUrl, {
            params: {
                api_key: apiKey,
                query
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = res.data.results.map((m) => ({
            id: m['id'],
            title: m['title'] || m['name'] || m['original_name'],
            poster: posterUrl + m['poster_path'],

        }))

        return modifiedData;
    } catch (error) { }
}





export const fetchDiscoverUrl = async () => {
    try {
        const { data } = await axios.get(discoverUrl, {
            params: {
                api_key: apiKey
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    } catch (error) { }

}


export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchMovieByGenre = async (genre_id) => {
    try {
        const { data } = await axios.get(getGenreUrl, {
            params: {
                api_key: apiKey,
                // language: 'en_US',
                page: 1,
                with_genres: genre_id
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchTrending = async () => {
    try {
        const { data } = await axios.get(trendingUrl, {
            params: {
                api_key: apiKey
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        console.log(modifiedData)
        return modifiedData;
    } catch (error) { }
}

export const fetchTopratedMovie = async () => {
    try {
        const { data } = await axios.get(topratedUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) {

    }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}

// const { data } = await axios.get(`${movieUrl}/${id}`, {
    export const fetchMovieVideos = async (id) => {
        try {
            const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
                params: {
                    api_key: apiKey,
                }
            });
            return data['results'].filter(
                (item) =>
                  item.site.toLowerCase() === "youtube" &&
                  item.type.toLowerCase() === "trailer"
              )[0];
        } catch (error) { }
    }

export const fetchCasts = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}