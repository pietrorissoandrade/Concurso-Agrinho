const curiosidades = [

"Os drones conseguem identificar pragas rapidamente.",

"A IA ajuda agricultores a economizar água.",

"A agricultura de precisão reduz impactos ambientais.",

"Sensores inteligentes analisam a qualidade do solo.",

"A tecnologia aumenta a produção de alimentos com sustentabilidade."

];

function gerarCuriosidade(){

const numero =
Math.floor(Math.random() * curiosidades.length);

document.getElementById("curiosidade").innerHTML =
curiosidades[numero];

}
