// ===============================
// IA AGRINHO
// ===============================

const curiosidades = [

"🌱 A agricultura de precisão utiliza GPS, sensores e softwares para aplicar água e fertilizantes apenas onde são necessários.",

"🚁 Drones conseguem identificar áreas com pragas antes que o problema se espalhe por toda a plantação.",

"💧 Sistemas de irrigação inteligente podem reduzir significativamente o desperdício de água.",

"☀️ A energia solar ajuda propriedades rurais a diminuir custos com eletricidade.",

"📡 Sensores instalados no solo enviam informações em tempo real sobre umidade e nutrientes.",

"🤖 A Inteligência Artificial pode prever doenças em plantas analisando imagens e dados climáticos.",

"🌾 O Brasil é uma referência mundial em agricultura tropical graças a pesquisas científicas.",

"🚜 Tratores modernos utilizam GPS para reduzir sobreposição de trabalho e economizar combustível.",

"🌍 Tecnologias sustentáveis ajudam a produzir mais alimentos usando menos recursos naturais.",

"📈 O uso de dados agrícolas permite tomadas de decisão mais rápidas e eficientes.",

"🌱 Algumas fazendas utilizam estações meteorológicas próprias conectadas à internet.",

"💦 A irrigação de precisão evita desperdício e melhora a produtividade.",

"🔋 Sistemas de energia renovável reduzem as emissões de gases do efeito estufa.",

"🌳 A integração lavoura-pecuária-floresta ajuda a recuperar áreas degradadas.",

"🛰️ Satélites ajudam produtores a monitorar grandes áreas agrícolas.",

"🐝 Tecnologias também auxiliam na preservação dos polinizadores.",

"📱 Muitos agricultores controlam equipamentos diretamente pelo celular.",

"🌦️ Previsões climáticas avançadas ajudam no planejamento das safras.",

"🌎 Produzir mais sem desmatar é um dos principais objetivos do agro sustentável.",

"🔬 Pesquisas científicas são fundamentais para desenvolver novas soluções para o campo."

];

// ===============================
// BOTÃO DE CURIOSIDADES
// ===============================

function gerarCuriosidade() {

    const numero =
        Math.floor(Math.random() * curiosidades.length);

    document.getElementById("resultado").innerHTML =
        curiosidades[numero];

}

// ===============================
// CHATBOT AGRINHO
// ===============================

function responderPergunta() {

    const pergunta = document
        .getElementById("pergunta")
        .value
        .toLowerCase();

    let resposta = "";

    if (
        pergunta.includes("drone")
    ) {

        resposta =
        "🚁 Os drones monitoram plantações, detectam pragas e ajudam a reduzir desperdícios de insumos.";

    }

    else if (
        pergunta.includes("agua") ||
        pergunta.includes("irrigação") ||
        pergunta.includes("irrigacao")
    ) {

        resposta =
        "💧 A irrigação inteligente utiliza sensores para aplicar apenas a quantidade necessária de água.";

    }

    else if (
        pergunta.includes("energia") ||
        pergunta.includes("solar")
    ) {

        resposta =
        "☀️ A energia solar reduz custos e gera eletricidade limpa para propriedades rurais.";

    }

    else if (
        pergunta.includes("sensor")
    ) {

        resposta =
        "📡 Sensores coletam dados sobre solo, temperatura e umidade em tempo real.";

    }

    else if (
        pergunta.includes("ia") ||
        pergunta.includes("inteligencia")
    ) {

        resposta =
        "🤖 A Inteligência Artificial auxilia na previsão de pragas, doenças e produtividade.";

    }

    else if (
        pergunta.includes("sustentabilidade")
    ) {

        resposta =
        "🌱 Sustentabilidade significa produzir alimentos preservando recursos naturais para as próximas gerações.";

    }

    else {

        resposta =
        "😊 Ainda estou aprendendo! Tente perguntar sobre drones, sensores, energia solar, irrigação, IA ou sustentabilidade.";

    }

    document.getElementById("resposta").innerHTML =
        resposta;

}

// ===============================
// ANIMAÇÃO DOS NÚMEROS
// ===============================

const numeros =
document.querySelectorAll(".numero h3");

numeros.forEach(numero => {

    const valorFinal =
    parseInt(numero.innerText);

    let contador = 0;

    const atualizar = () => {

        contador += Math.ceil(valorFinal / 50);

        if(contador < valorFinal){

            numero.innerText = contador + "%";

            requestAnimationFrame(atualizar);

        } else {

            numero.innerText =
            valorFinal + "%";

        }

    };

    atualizar();

});
