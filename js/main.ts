import { getLatestNews } from "../services/NewsService";

const app = document.getElementById('app');

const response = getLatestNews();

app!.innerHTML = ``;