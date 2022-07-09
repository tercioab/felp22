const box = document.getElementById("box-teste");



box.addEventListener("click", () => {
	if (box.className !== "mudar") {
		box.className = "mudar";
		box.innerHTML = `<h1> FELP 22 ! </h1> `;
	} else {
		box.className = "box";
		box.innerHTML = `<h1> QUEM DISSE QUE VOCÊ NÃO PODE VOAR MENOR ? </h1> `;
	}
});
