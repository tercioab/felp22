const box = (document.getElementById("box-teste"));





box.addEventListener('click', function() {
    if (box.className !== "mudar") {
        box.className = 'mudar'
    } else {box.className = 'box'}
})


