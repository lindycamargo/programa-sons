function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
  }
  
  const listaDeCidade = document.querySelectorAll(".tecla");
  
  listaDeCidade.forEach((cidade) => {
    const classeCidade = cidade.classList[1];
    const idAudio = `#som_cidade_${classeCidade}`;
  
    cidade.onclick = function () {
      tocaSom(idAudio);
      document.querySelector("img").src = `./imagens/${classeCidade}.png`;
    };
  
    console.log(classeCidade);
    console.log(idAudio);
  
    cidade.onkeydown = function (evento) {
      if (
        evento.code === "Space" ||
        evento.code === "Enter" ||
        evento.code === "NumpadEnter"
      ) {
        cidade.classList.add("ativa");
      }
    };
  
    cidade.onkeyup = function () {
      cidade.classList.remove("ativa");
    };
  });
  