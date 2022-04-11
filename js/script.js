
// funzione per generare numeri casuali

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// creo l'array contenente tutti gli oggetti di cui ho bisogno

const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

(function (){
    const appElm = document.getElementById('app');
    const containerElm = document.createElement('div');
    containerElm.classList.add('container', 'pt-5');
    const rowElm = document.createElement('div');
    rowElm.classList.add('row', 'gy-5');
    
    cards.forEach((element)=> {
        const colElm = document.createElement('div');
        colElm.classList.add('col-3');
        const cardElm= document.createElement('div');
        cardElm.classList.add('card', 'd-flex', 'justify-content-center', 'rounded-pill');
        const cardWrapperElm= document.createElement('div');
        cardWrapperElm.classList.add('card-wrapper');
        const i = document.createElement('i');
        i.classList.add(`${element.prefix}solid`, `${element.prefix}${element.name}`);
        i.style.color = `${element.color}`
        i.setAttribute('alt', `${element.type}`);
        const spanElm = document.createElement('span');
        spanElm.classList.add('d-block');
        spanElm.textContent = `${element.name}`;

        cardWrapperElm.append(spanElm)
        cardWrapperElm.append(i)
        cardElm.append(cardWrapperElm)
        colElm.append(cardElm);
        rowElm.append(colElm);
        containerElm.append(rowElm);
        appElm.append(containerElm);    
        
    })

    /*
html da generare tramite js

<div class="container pt-5">
                <div class="row gy-5">
                    <div class="col-3">
                        <div class="card d-flex justify-content-center rounded-pill">
                            <div class="card-wrapper">
                                <i class="fa-solid fa-fish"></i>
                                <span class="d-block">fish</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/


})();