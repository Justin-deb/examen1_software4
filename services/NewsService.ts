import type { ServerResponse } from "../../types/ServerResponse";

const API_KEY = '1d3f8e372d1748d6a56ebd76fb6588bc';
const API_URL = 'https://newsapi.org/v2/';

const getCostaRicaNews = async ():Promise<ServerResponse> => {
    const response = await fetch(`${API_URL}top-headlines?country=cr&apiKey=${API_KEY}`);

    if(!response.ok){
        throw new Error('Cannot fetch new from Costa Rica');
    }

    const data:ServerResponse = await response.json();
    return data;
};