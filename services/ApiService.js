import axios from 'axios';
import { URL, API_KEY } from '../config/const';

export const fetchShows = async (search, shows) => {
    console.log('tv shows', search);
    if (!search) {
        const response = await axios.get(`${URL}/trending/tv/week?api_key=${API_KEY}`);
        return [...shows, ...response.data.results];
    } else {
        console.log('in else');
        const response = await axios.get(
            `${URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${search}`
        ); 
        return [...response.data.results];
    }
}

export const fetchSimilarTV = async (showsSimilar) => {
        console.log("similar tv shows", showsSimilar);
        const response = await axios.get(`${URL}/tv/{tv_id}/similar?api_key=${API_KEY}`)
        console.log("TUKA SI?")
        return [...showsSimilar, response.data.results]
       
        
}
