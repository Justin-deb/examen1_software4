import { type New } from "../types/New.js";

export function createHTMLNewsCard(news: New): string {
  // Formateamos un poco la fecha para que no se vea cruda
  const date = new Date(news.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `
    <div class="w-full mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-shadow duration-300">
      <div class="flex flex-col md:flex-row">
        
        <div class="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src="${news.urlToImage}" 
            alt="${news.title}"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-6 md:w-2/3 flex flex-col justify-center">
          <div class="flex items-center text-xs text-gray-500 mb-2 uppercase font-bold tracking-wide">
            <span class="text-blue-600">${news.source.name}</span>
            <span class="mx-2 text-gray-300">|</span>
            <span>${date}</span>
          </div>

          <h2 class="text-xl font-bold text-gray-900 leading-snug mb-2">
            ${news.title}
          </h2>

          <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            ${news.description}
          </p>

          <div class="flex items-center justify-between mt-auto">
            <span class="text-sm text-gray-500 italic w-2/3 line-clamp-2">Autores: ${news.author || "Redacción"}</span>
            <a 
              href="${news.url}" 
              target="_blank"
              class="text-white font-semibold text-sm hover:underline flex items-center p-3 bg-blue-600 rounded-md"
            >
              Leer más 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}
