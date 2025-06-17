function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeAnimais = document.querySelectorAll(".tecla");

listaDeAnimais.forEach((animal) => {
  const classeAnimal = animal.classList[1];
  const idAudio = `#som_animal_${classeAnimal}`;

  animal.onclick = function () {
    tocaSom(idAudio);
    document.querySelector("img").src = `./imagens/${classeAnimal}.png`;
  };

  console.log(classeAnimal);
  console.log(idAudio);

  animal.onkeydown = function (evento) {
    if (
      evento.code === "Space" ||
      evento.code === "Enter" ||
      evento.code === "NumpadEnter"
    ) {
      animal.classList.add("ativa");
    }
  };

  animal.onkeyup = function () {
    animal.classList.remove("ativa");
  };
});
