// função para criar pizza no DOM - código de cima foi colado 
function gerarPizza() {
	var containerPizzas = document.querySelector('#container-pizzas');
	var pizza = document.createElement('li'); 
	var pizzaImg = document.createElement('img'); 
	pizzaImg.setAttribute('src','img/pizza.png')
	pizza.appendChild(pizzaImg)
	containerPizzas.appendChild(pizza);
}

// invocar a função gerarPizza baseada no evento
var botao = document.querySelector('button')

// quando o botão for clicado vai disparar uma função que está dentro dos {}
botao.onclick = function(){
	gerarPizza();
}
