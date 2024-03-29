fetchFaqData()
    .then(data => {
        console.log('Perguntas Frequentes recebidas:', data);

        // Reference to the container for FAQ items
        const itemColumn_A = document.getElementById('column-items_A');
        const itemColumn_B = document.getElementById('column-items_B');

        // Iterate through each FAQ item in the JSON data
        data.faq.forEach((faq, index) => {
            const itemContent = document.createElement('div');
            itemContent.classList.add('accordion-item');
            itemContent.innerHTML = `
          <h2 class="accordion-header">
              <button class="accordion-button btn-open-faq">
                  ${faq.title}

                  <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
          </h2>
          <div class="accordion-content">
              <p class="faq-answer">
                  ${faq.content}
              </p>
          </div>
      `;

            // Add the FAQ item to the main container
            if (index < data.faq.length / 2) {
                itemColumn_A.appendChild(itemContent);
            } else {
                itemColumn_B.appendChild(itemContent);
            }

            // Set the accordion content to display: none
            itemContent.querySelector('.accordion-content').classList.add('accordion-content-hidden');

            // Add a click event listener to each button to toggle the accordion container visibility
            itemContent.querySelector('.accordion-button').addEventListener('click', function () {
                const accordion = this.parentElement.nextElementSibling;

                // Toggle the accordion content visibility
                accordion.classList.toggle('accordion-content-hidden');
                accordion.classList.toggle('open');

                // Remove the transition property to prevent it from being applied twice
                accordion.style.transition = '';

                // Adjust the height of the accordion content
                if (accordion.classList.contains('accordion-content-hidden')) {
                    accordion.style.height = '0px';
                } else {
                    accordion.style.height = accordion.scrollHeight + 'px';
                }

                // Add the transition effect to the accordion content
                accordion.style.transition = 'height 0.3s ease-out';

                // Toggle the active class on the accordion button
                this.classList.toggle('active');
            });
        });
    })
    .catch(error => {
        console.error('Erro geral:', error.message);
        // Handle the error appropriately
    });