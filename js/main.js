// a variável containerPizzas refere-se à id #container-pizzas no arquivo html
var containerPizzas = document.querySelector('#container-pizzas');

//criação <li></li> no arquivo html
var pizza = document.createElement('li'); 
//criação <img> no arquivo html
var pizzaImg = document.createElement('img'); 

// adicionar atributo à <img> = <img primeiro atributo='segundo atributo'>
pizzaImg.setAttribute('src','https://source.unsplash.com/100x100/?pizza')

// adicionar <li><img></li> = pizza(li) vai ter um filho(img)
pizza.appendChild(pizzaImg)

// adicionar a pizza (li) à <ul> do html através do id
containerPizzas.appendChild(pizza);

// gerar pizza por função - código de cima foi colado 
function gerarPizza() {
	var containerPizzas = document.querySelector('#container-pizzas');
	var pizza = document.createElement('li'); 
	var pizzaImg = document.createElement('img'); 
	pizzaImg.setAttribute('src','https://source.unsplash.com/100x100/?pizza')
	pizza.appendChild(pizzaImg)
	containerPizzas.appendChild(pizza);
}

// invocar a função gerarPizza baseada no evento
