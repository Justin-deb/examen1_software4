import { getLatestNews } from "../services/NewsService.js";
import { createHTMLNewsCard } from "./news-card.js";

const app = document.getElementById("app");

async function loadNewsCards() {
  const response = await getLatestNews();
  const newsSection = document.getElementById("news");

  if (newsSection && response.articles) {
    const htmlContent = response.articles
      .map((news: any) => createHTMLNewsCard(news))
      .join("");

    newsSection.innerHTML = htmlContent;
  }
}
loadNewsCards();

app!.innerHTML = ``;
