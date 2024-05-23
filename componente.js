//Funcion reutilizar el header
document.addEventListener("DOMContentLoaded", function(){
    //Para mostarar la cabezera
    const headerContainer = document.querySelector("#header-container");
    fetch("header.html").then(respuesta =>{
        if(!respuesta.ok){
            throw new Error("La respuesta no fue la correcta!");
        }
        return respuesta.text();
    })
    .then(datos => {
        headerContainer.innerHTML = datos;
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error.message);
    });
});

//Funcion reutilizar el footer
document.addEventListener("DOMContentLoaded", function(){
    //Para mostarar la cabezera
    const footerContainer = document.querySelector("#footer-container");
    fetch("footer.html").then(respuesta =>{
        if(!respuesta.ok){
            throw new Error("La respuesta no fue la correcta!");
        }
        return respuesta.text();
    })
    .then(datos => {
        footerContainer.innerHTML = datos;
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error.message);
    });
});