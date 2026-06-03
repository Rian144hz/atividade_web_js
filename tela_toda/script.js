const btnAdd = document.getElementById('btn_adicionar');
const containerCards = document.querySelector('.container-card');

let contadorCard = 0;

function adicionarCard(){
contadorCard++;

const novoCard = document.createElement('div');
novoCard.classList.add('card');
novoCard.setAttribute('data-id',contadorCard);

novoCard.innerHTML = `
        <h4>Card número: ${contadorCard}</h4>
        <p>coisas ficaram aqui dentro...</p>
    `;

    containerCards.appendChild(novoCard);
}

btnAdd.addEventListener('click',adicionarCard);
