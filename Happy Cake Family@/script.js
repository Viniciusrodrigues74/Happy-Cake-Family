function openNav(){
    document.getElementById("navegation").style.width = "100%";
    document.body.style.overflow = "hidden";
}

function closeNav(){
    document.getElementById("navegation").style.width = "0%";
    document.body.style.overflow = "visible";
}

function openJanela1(){
    lockPage(); // Chama a função para travar a página
    document.getElementById("janela1").style.display = "block"; // Corrigido o estilo de exibição
    // Impedir o comportamento padrão do evento
    event.preventDefault();
}

function closeJanela(){
    unlockPage(); // Chama a função para destravar a página
    document.getElementById("janela1").style.display = "none"; // Corrigido o estilo de exibição
    // Impedir o comportamento padrão do evento
    event.preventDefault();
}

function lockPage() {
    document.body.style.overflow = "hidden";
}

function unlockPage() {
    document.body.style.overflow = "visible";
}
