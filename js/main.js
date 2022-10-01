// variaveis
const button = document.querySelector("#button");
const priceBasic = document.querySelector("#priceBasic");
const priceProfissional = document.querySelector("#priceProfissional");
const priceMaster = document.querySelector("#priceMaster");
// button theme
const btn__theme = document.querySelector("#theme__button");
const body = document.querySelector("body");





// logic

btn__theme.addEventListener("click" , toogleMode);

button.addEventListener("click" , toogleOption);

// functions 

function toogleMode(){
	// ao clicar troca acrecenta a classe theme dark e assim o btn circle muda de posição 
	btn__theme.classList.toggle("dark");
	
	body.classList.toggle("theme__dark")
	
}

function toogleOption(){
	// ao clicar troca acrecenta a classe annually e assim o btn circle muda de posição 
	// ao clicar novamente tira a classe annually
	button.classList.toggle("annually");

	//se o btn estiver com a classe annually, alterar os valores dos cards
	changeValues();
}
function changeValues(){
	if(button.classList.contains("annually")){
		priceBasic.textContent="199.99";
		priceProfissional.textContent="249.99";
		priceMaster.textContent="399.99";
	}
	else if(button.classList.contains("btn")){
		priceBasic.textContent="19.99";
		priceProfissional.textContent="24.99";
		priceMaster.textContent="39.99";
	}
}