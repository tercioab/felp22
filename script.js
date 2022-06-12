const box = document.getElementById("box-teste");



box.addEventListener("click", function () {
	if (box.className !== "mudar") {
		box.className = "mudar";
		box.innerHTML = `<h1> BRABÃO DE PEGAR ! </h1> `;
	} else {
		box.className = "box";
		box.innerHTML = `<h1> QUEM DISSE QUE VOCÊ NÃO PODE VOAR MENOR ? </h1> `;
	}
});
