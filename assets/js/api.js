// Função para buscar dados da API
async function fetchSitesData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Guilherme-dev15/landing-page-cassino/main/data/sites.json');

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados. Código: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na solicitação:', error.message);
        throw error;
    }
}


// Função para buscar dados da API FAQ
async function fetchFaqData() {
    try {
        const response = await fetch('../../data/faq.json');

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados. Código: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na solicitação:', error.message);
        throw error;
    }
}