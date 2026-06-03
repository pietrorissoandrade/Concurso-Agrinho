const curiosidades = [

"🌱 Um drone agrícola consegue mapear uma plantação inteira em poucos minutos.",

"💧 A irrigação inteligente pode economizar até 50% de água em algumas culturas.",

"☀️ Muitas fazendas brasileiras já produzem sua própria energia por meio de painéis solares.",

"🤖 Sistemas de IA conseguem prever pragas antes mesmo que elas se espalhem.",

"📡 Sensores conectados à internet permitem acompanhar a saúde do solo em tempo real.",

"🚜 Tratores autônomos já são utilizados em diversos países para aumentar a eficiência agrícola."

];

function gerarCuriosidade(){

const numero = Math.floor(Math.random() * curiosidades.length);

document.getElementById("resultado").innerHTML =
curiosidades[numero];

}
