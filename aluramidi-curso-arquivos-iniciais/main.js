//let contador = 0;

function tocaSom(idAudio) {
	document.querySelector(idAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < 9; i ++){
	const tecla = listaTeclas[i]
	const instrumento = tecla.classList[1];
	const audio = `#som_${instrumento}`;
	tecla.onclick = function () {
		tocaSom(audio);
	}
}

tecla.onkeydown = function () {
	tecla.classList.add('ativa')
}

tecla.onkeyup = function () {
	tecla.classList.remove('ativa')
}




/*
while (contador < listaTeclas.length) {
	
	const tecla = listaTeclas[contador]
	const instrumento = tecla.classList[1];
	//Template string
	const audio = `#som_${instrumento}`;
	
	tecla.onclick = function () {
		tocaSom(audio);
	}
	contador = contador + 1;
}
*/