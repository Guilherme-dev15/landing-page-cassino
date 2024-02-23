fetchSitesData()
    .then(data => {
        console.log('Dados recebidos:', data);

        const sitesContainer = document.getElementById('sites-container');

        // Itera sobre cada site no JSON
        data.sites.forEach(site => {
            // Cria um novo elemento div para representar o card do site
            const siteCard = document.createElement('div');
            siteCard.classList.add('content-card'); // Adiciona a classe para estilização

            // Atualiza os elementos dentro do card com os dados do site atual
            siteCard.innerHTML = `
        <div class="card-image">
          <img src="${site.logo}" alt="${site.name}">
          <span>${site.name}</span>
        </div>
        <div class="container-description">
          <div class="card-description">
            <h2>${site.headline}</h2>
            <p>${site.description}</p>
          </div>
          <ul class="card-category">
            ${site.category.categories.map(category => `
              <li class="categoria">${category.name}:
                <span>${category.value || "Não especificado"}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="rating">
            <p class="star-title">Avaliação da empresa:</p>
            <div class="rankingBox">
                <span class="rankingA">${site.rating}</span>
                <span class="rankingB">/5</span>
            </div>
            <ul class="rating_stars">
            <!-- Estrelas dinamicamente com base na pontuação -->
            ${Array.from({ length: 5 }).map((_, index) => {
                const rating = site.rating;
                const halfStar = index === Math.floor(rating) && rating % 1 !== 0;
                const fullStar = index < Math.floor(rating);
                const starClass = halfStar ? 'fa-star-half-o' : fullStar ? 'fa-solid' : 'fa-regular';
                return `
                    <li>
                        <i class="${starClass} fa-star" aria-hidden="true"></i>
                    </li>
                `;
            }).join('')}
        </ul>
        </div>
        <div class="card-informations">
          <button class="btn-cta">Visitar</button>
        </div>
      `;

            // Adiciona o card do site ao contêiner principal
            sitesContainer.appendChild(siteCard);
        });
    })
    .catch(error => {
        console.error('Erro geral:', error.message);
        // Lide com o erro de maneira apropriada
    });
