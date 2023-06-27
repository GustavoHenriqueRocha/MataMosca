var altura = 0
var largura = 0
var vidas = 1
var tempo = 0

//tempo de vida do mosquito
var criaMosquitoTempo = 1500

//recuperando o nivel
var nivel = window.location.search
nivel = nivel.replace('?', '')//substitui ? por ''

if (nivel==="normal") {
	//1500
	criaMosquitoTempo = 1500
	tempo = 30
}

else if (nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
	tempo = 40
}

else if (nivel === 'veryhard') {
	//750
	criaMosquitoTempo = 750
	tempo = 50
}

//encontrando o tamanho da tela
function ajustaTempoPalcoJogo() {


	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}
//chamando a funcao no proprio JS
ajustaTempoPalcoJogo()

//iniciando cronometro, isso aqui nao tem explicaçao né burro
var cronometro = setInterval(function() {

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	}

	else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
},1000)


//metodo Math.random gera um numero aleatorio e eu mutiplico ele 
//pela altura e largura da pagina e reduzo 90px pra imagem ficar dentro da tela
//Math.floor arredonda os numeros
function posicaoRandomica() {

	//antes de tudo verifica se nao tem um mosquito ja criado
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//agora eu mato esse merdinha
		if (vidas > 3) {
			window.location.href = "fim_de_jogo.html"
		}

		else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
		
		
	}
	



	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//se for igual menor que 0 se for recebe 0 se nao recebe ela mesmo
	//evita a img aparecer fora da tela por conta do -90px
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	//criar elementos html, no caso esta criando o elemento do mosquito
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	//tamanhoAleatorio retorna a string com nome da classe usada no css
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}


	document.body.appendChild(mosquito)
}


//tamanhos aleatorios ativado toda vez que a funcao acima é ativada
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3) 

	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}


//lado aleatorio funciona como a funcao tamanhoAleatorio()
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2) 

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}