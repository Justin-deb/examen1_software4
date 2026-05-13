const API_KEY = "1d3f8e372d1748d6a56ebd76fb6588bc";
const API_URL = "https://newsapi.org/v2/";

const getLatestNews = async () => {
  const response = await fetch(`${API_URL}top-headlines?country=us&apiKey=${API_KEY}`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Error en la petición a la API");
  }

  return await response.json();
};

function createHTMLNewsCard(news) {
  const { title, description, urlToImage, url, source } = news;

  const image = urlToImage ? urlToImage : "https://via.placeholder.com/400x250?text=No+Image";
  const sourceName = source && source.name ? source.name : "Actualidad";

  return `
    <article class="news-card">
        <div class="news-image-container">
            <img src="${image}" alt="${title}">
        </div>
        <div class="news-content">
            <span class="news-source">${sourceName}</span>
            <h2 class="news-title">${title}</h2>
            <p class="news-desc">${description || "No hay descripción disponible para esta noticia."}</p>
            <a href="${url}" target="_blank" class="btn-read">Leer más</a>
        </div>
    </article>
  `;
}

async function loadNewsCards() {
  const newsSection = document.getElementById("news");

  try {
    const response = await getLatestNews();

    if (newsSection && response && response.articles) {
      const htmlContent = response.articles.map((news) => createHTMLNewsCard(news)).join("");

      newsSection.innerHTML = htmlContent;
    }
  } catch (error) {
    if (newsSection) {
      newsSection.innerHTML = `<p style="padding: 2rem; color: red;">Error al cargar las noticias: ${error.message}</p>`;
    }
  }
}

loadNewsCards();
