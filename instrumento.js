function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
  }
  
  const listaDeInstrumentos = document.querySelectorAll(".tecla");
  
  listaDeInstrumentos.forEach((instrumentos) => {
    const classeInstrumentos = instrumentos.classList[1];
    const idAudio = `#som_instrumento_${classeInstrumentos}`;
  
    instrumentos.onclick = function () {
      tocaSom(idAudio);
      document.querySelector("img").src = `./imagens/${classeInstrumentos}.png`;
    };
  
    console.log(classeInstrumentos);
    console.log(idAudio);

    instrumentos.onkeydown = function (evento) {
      if (
        evento.code === "Space" ||
        evento.code === "Enter" ||
        evento.code === "NumpadEnter"
      ) {
        instrumentos.classList.add("ativa");
      }
    };
  
    instrumentos.onkeyup = function () {
      instrumentos.classList.remove("ativa");
    };
  });
  

