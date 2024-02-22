async function fetchSitesData() {
    const url = '';
  
    try {
      const response = await fetch(url);
  
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
  
  // Exemplo de uso
  fetchSitesData()
    .then(data => {
      console.log('Dados recebidos:', data);
      // Faça algo com os dados aqui
    })
    .catch(error => {
      console.error('Erro geral:', error.message);
      // Lide com o erro de maneira apropriada
    });
