//israeljl
//basic password generator - default 3 letters, 2 numbers and 3 letters

function gerarSenha() {

	var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
	var numeros = [0,1,2,3,4,5,6,7,8,9];
	var senha = "";
	
	for (senha.length = 0; senha.length < 8; senha.length++) {
	
	  l = Math.floor(Math.random() * letras.length);
	  n = Math.floor(Math.random() * numeros.length);
	  
	  if (senha.length < 3) {
	  	senha = senha + letras[l];
	  } else
	  if (senha.length < 5) {
	  	senha = senha + numeros[n];
	  } else
	  if (senha.length < 8) {
	  	senha = senha + letras[l];
	  }
	  
	}
	
	return senha;
	
}
