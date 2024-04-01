var i = 0;
var txt = 'Olá, o meu nome é Paula Cruz e este é o meu Curriculum Vitae, onde poderá encontrar informações sobre a minha experiência profissional, educação e formação, competências linguísticas, digitais, de organização, sociais e de comunicação, carta de condução, tempos livres e contactos. Espero que goste e que possa ser útil para o que procura. Obrigada pela visita!.';
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}