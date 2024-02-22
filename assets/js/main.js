fetchSitesData()
    .then(data => {
        console.log('Dados recebidos:', data);
        // Atualize o conteúdo do DOM com os dados recebidos
        document.getElementById('image-logo').src = data.logo;
        document.getElementById('name-cassino').innerText = data.name;
        document.getElementById('headline').innerText = data.headline;
        document.getElementById('description-cassino').innerText = data.description;

        const categoriesElement = document.getElementById('card_categories');
        categoriesElement.innerHTML = data.category.categories.map(category => {
            const categoryValue = category.value || "Não especificado";
            return `<li class="categoria">${category.name}:
                        <span>${categoryValue}</span>
                    </li>`;
        }).join('');

        document.getElementById('ranking').innerText = data.rating;
    })
    .catch(error => {
        console.error('Erro geral:', error.message);
        // Lide com o erro de maneira apropriada
    });
(async () => {
  const cardData = await fetchSitesData()
  updateCardInfo(cardData)
})()