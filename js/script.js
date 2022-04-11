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

// METODO NON FUNZIONALE
    // cards.forEach((element)=> {
    //     const colElm = document.createElement('div');
    //     colElm.classList.add('col-3');
    //     const cardElm= document.createElement('div');
    //     cardElm.classList.add('card', 'd-flex', 'justify-content-center', 'rounded-pill');
    //     const cardWrapperElm= document.createElement('div');
    //     cardWrapperElm.classList.add('card-wrapper');
    //     const i = document.createElement('i');
    //     i.classList.add(`${element.prefix}solid`, `${element.prefix}${element.name}`);
    //     i.style.color = `${element.color}`
    //     i.setAttribute('alt', `${element.type}`);
    //     const spanElm = document.createElement('span');
    //     spanElm.classList.add('d-block');
    //     spanElm.textContent = `${element.name}`;
    //     cardWrapperElm.append(i)
    //     cardWrapperElm.append(spanElm)
    //     cardElm.append(cardWrapperElm)
    //     colElm.append(cardElm);
    //     rowElm.append(colElm);
    //     containerElm.append(rowElm);
    //     appElm.append(containerElm);    
    // })


(function (){
    const appElm = document.getElementById('app');
    const containerElm = document.createElement('div');
    containerElm.classList.add('container', 'pt-5');
    const rowElm = document.createElement('div');
    rowElm.classList.add('row', 'gy-5');

        function creaCards(cards) {
            let card = '';
            cards.forEach((element)=> {
            card += `
            <div class="col-3">
                <div class="card d-flex justify-content-center rounded-pill">
                    <div class="card-wrapper">
                        <i class="${element.prefix}solid ${element.prefix}${element.name}" alt="${element.type}" style="color: ${element.color}"></i>
                        <span class="d-block">${element.name}</span>
                    </div>
                </div>
            </div>
            `;
            return card;
        })
         rowElm.innerHTML += card;
    };

    creaCards(cards);

    let selezione = document.getElementById('scelta');

    selezione.addEventListener("change", function(){

	let tipo = selezione.value;

	if(tipo === "animal"){
		rowElm.innerHTML = "";
		creaCards(cards.filter((element) => element.type === "animal"));
    }else if(tipo === "all"){
		rowElm.innerHTML = "";
		creaCards(cards);
	} else if (tipo === "vegetable"){
		rowElm.innerHTML = "";
		creaCards(cards.filter((element) => element.type === "vegetable"));
	}else if(tipo === "user"){
		rowElm.innerHTML = "";
		creaCards(cards.filter((element) => element.type === "user"));
}})

    containerElm.append(rowElm);
    appElm.append(containerElm);   

})();
