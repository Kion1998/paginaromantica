function createHeart() {
    const heart = document.createElement("div");
    heart.textContent = "❤️";  // Emoji de corazón
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";  // Posiciona el corazón aleatoriamente
    heart.style.bottom = "0px";
    heart.style.width = "30px";  // Tamaño más pequeño
    heart.style.height = "30px";  // Tamaño más pequeño
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);  // Elimina el corazón después de 3 segundos
}

setInterval(createHeart, 250);  // Crea un corazón cada 250 ms

function showResponse(isYes) {
    if (isYes) {
        // Redirigir a la página si.html
        window.location.href = "si.html";
    } else {
        alert("porque elegiste no? malvada.. activando virus de mordida");
        // Si quieres redirigir a otra página cuando se elige No, descomenta la línea siguiente:
        // window.location.href = "otra_pagina.html";
    }
}


function resetGIF() {
    let gif = document.querySelector(".background-gif");
    let src = gif.src.split("?")[0]; // Elimina parámetros previos (si los hay)
    gif.src = `${src}?t=${new Date().getTime()}`; // Agrega un timestamp único
}

setInterval(resetGIF, 5000); // Reinicia el GIF cada 5 segundos


