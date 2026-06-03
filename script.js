{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

body{
    background:#f5f7f5;
    color:#222;
    line-height:1.6;
}

/* MENU */

.navbar{
    position:fixed;
    top:0;
    width:100%;
    background:rgba(0,0,0,0.85);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 8%;
    z-index:1000;
}

.logo{
    color:#4CAF50;
    font-size:1.6rem;
}

.menu{
    display:flex;
    list-style:none;
    gap:25px;
}

.menu a{
    color:white;
    text-decoration:none;
    transition:0.3s;
}

.menu a:hover{
    color:#4CAF50;
}

/* HERO */

.hero{
    height:100vh;

    background:
    linear-gradient(rgba(0,0,0,.55),
    rgba(0,0,0,.55)),
    url("images/hero.jpg");

    background-size:cover;
    background-position:center;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
}

.hero-content{
    max-width:800px;
    padding:20px;
}

.hero h1{
    font-size:4rem;
    margin-bottom:20px;
}

.hero p{
    font-size:1.2rem;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    background:#4CAF50;
    color:white;
    text-decoration:none;
    padding:15px 35px;
    border-radius:50px;
    transition:0.3s;
}

.btn:hover{
    transform:translateY(-3px);
    background:#388E3C;
}

/* SEÇÕES */

section{
    padding:100px 8%;
}

.titulo{
    text-align:center;
    font-size:2.5rem;
    margin-bottom:50px;
    color:#2e7d32;
}

/* CARDS */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.card{
    background:white;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 10px 25px rgba(0,0,0,0.1);
    transition:0.4s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:220px;
    object-fit:cover;
}

.card h3{
    padding:15px;
    color:#2e7d32;
}

.card p{
    padding:0 15px 20px;
}

/* ESTATÍSTICAS */

.estatisticas{
    background:#2e7d32;
    color:white;
}

.estatisticas .titulo{
    color:white;
}

.numeros{
    display:flex;
    justify-content:center;
    gap:40px;
    flex-wrap:wrap;
}

.numero{
    text-align:center;
}

.numero h3{
    font-size:3rem;
}

/* PESQUISAS */

.pesquisa{
    background:white;
    padding:25px;
    margin-bottom:25px;
    border-left:6px solid #4CAF50;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
}

/* VÍDEOS */

.videos{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
    gap:25px;
}

.videos iframe{
    width:100%;
    height:300px;
    border:none;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.15);
}

/* IA */

#curiosidades{
    text-align:center;
    background:#eef8ee;
}

.texto-ia{
    margin-bottom:20px;
}

button{
    background:#4CAF50;
    color:white;
    border:none;
    padding:15px 30px;
    border-radius:30px;
    cursor:pointer;
    font-size:1rem;
    transition:0.3s;
}

button:hover{
    background:#388E3C;
}

#resultado{
    margin-top:30px;
    padding:20px;
    max-width:700px;
    margin-left:auto;
    margin-right:auto;
    background:white;
    border-radius:12px;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
    font-size:1.1rem;
}

/* RODAPÉ */

footer{
    background:#111;
    color:white;
    text-align:center;
    padding:40px 20px;
}

footer ul{
    list-style:none;
    margin:15px 0;
}

footer li{
    margin:5px 0;
}

/* RESPONSIVO */

@media(max-width:768px){

    .hero h1{
        font-size:2.5rem;
    }

    .menu{
        gap:12px;
        font-size:0.9rem;
    }

    .videos{
        grid-template-columns:1fr;
    }

    .videos iframe{
        height:220px;
    }

}
