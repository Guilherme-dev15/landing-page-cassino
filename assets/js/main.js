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
                <div class="betting-house-container">
                    <div class="betting-house-info">
                        <!-- Logo -->
                        <div class="logo-section">
                            <div class="logo-content">
                                <a href="${site.link}">
                                    <img class="logo-image" src="${site.logo}" alt="${site.name}">
                                </a>
                                <span class="betting-house-name">${site.name}</span>
                            </div>
                            <div class="desktop-rating-content-mobile">
                                <p class="line-height-text">Rating</p>
                                <p class="line-height-text">of this house</p>
                                <div class="rating-info relative">
                                    <span class="rating-number">${site.rating}</span>
                                    <span> / 5</span>
                                    <div class="stars-container relative">
                                        <div class="stars">
                                                <!-- Stars dynamically based on the rating -->
                                                ${Array.from({ length: 5 }).map((_, index) => {
                                                const floorRating = Math.floor(site.rating);
                                                const hasHalfStar = index === floorRating && site.rating % 1 !== 0;
                                                const fullStar = index < floorRating;
                                                const notFull = index >= Math.ceil(site.rating);

                                                    const starClass = hasHalfStar ? 'fa-star-half-o' : fullStar ? 'fa-solid' : notFull ? 'fa fa-star-o' : 'error';

                                                    return `
                                                    <i class="fa ${starClass} fa-star" aria-hidden="true"></i>
                                                `;
                                                    }).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bonus and Terms -->
                        <div class="bonus-section">
                            <div class="bonus-content">
                                <h1 class="bonus-amount">${site.bonus}</h1>
                                <span class="bonus-description">${site.description}</span>
                                <div>
                                    <a href="${site.bonusLink}">Read more about the bonus</a>
                                </div>
                                <div class="bonus-details">
                                    <div class="bonus-detail">
                                        <div><span>Min. Deposit</span><span> ${site.minimumDeposit}</span></div>
                                        <div><span>Percentage</span><span> ${site.percentage}</span></div>
                                        <div><span>Rollover</span><span> ${site.rollover}</span></div>
                                        <div><span>Validity</span><span> ${site.validity}</span></div>
                                        <!--div><span>Promo Code</span><span> ${site.promoCode}</span></div-->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Desktop Rating -->
                        <div class="desktop-rating-section">
                            <div class="desktop-rating-content">
                                <p>Rating</p>
                                <p>of this house</p>
                                <div class="desktop-rating-info">
                                    <span>${site.rating}</span>
                                    <span> / 5</span>
                                    <div class="stars-container">
                                        <div class="stars">
                                            <!-- Stars dynamically based on the rating -->
                                            ${Array.from({ length: 5 }).map((_, index) => {
                                            const floorRating = Math.floor(site.rating);
                                            const hasHalfStar = index === floorRating && site.rating % 1 !== 0;
                                            const fullStar = index < floorRating;
                                            const notFull = index >= Math.ceil(site.rating);
                                            const starClass = hasHalfStar ? 'fa-star-half-o' : fullStar ? 'fa-solid' : notFull ? 'fa fa-star-o' : 'error';
                                            return `
                                                    <i class="fa ${starClass} fa-star" aria-hidden="true"></i>
                                                `;
                                           }).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Visit Button -->
                        <div class="visit-button-section">
                            <div class="visit-button-content">
                                <button class="cta-casino">Visit</button>
                            </div>
                            <div class="bonus-link">
                                <a href="${site.bonusLink}">Read more about the bonus</a>
                            </div>
                        </div>
                    </div>
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
