function porFora() {
    document.getElementById("Autor").style.display = "none"    
}

function porCima() {
    document.getElementById("Autor").style.display = "block"
}

function Relogio() {
    let novahora = new Date();

    let hora = novahora.getHours();
    let minutos = novahora.getMinutes();
    let segundos = novahora.getSeconds();

    document.getElementById('titulo').textContent = hora+":"+minutos+":"+segundos;

}

Relogio()

setInterval(() => {
    Relogio()
},1000)