Javascript

// Mostrar o botão quando rolar a página
window.onscroll = function() {
    let btn = document.getElementById("topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Clicar no botão volta ao topo
window.onload = function() {
    document.getElementById("topBtn").onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
};