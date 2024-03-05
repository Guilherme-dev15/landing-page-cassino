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
                <div class="accordion-content display-none" id="accordion-content-faq">
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

        });



        // Select all the buttons and accordion containers elements after they have been added to the DOM
        const btnOpen = document.getElementsByClassName('btn-open-faq');

        // Add a click event listener to each button to toggle the accordion container visibility
        for (let i = 0; i < btnOpen.length; i++) {
            btnOpen[i].addEventListener('click', function () {
                const accordion = this.parentElement.nextElementSibling;
                if (accordion.classList.contains('display-none')) {
                    accordion.classList.remove('display-none');
                } else {
                    accordion.classList.add('display-none');
                }
            });
        }
    })
    .catch(error => {
        console.error('Erro geral:', error.message);
        // Handle the error appropriately
    });


