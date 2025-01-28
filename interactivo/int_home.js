const mostrarMenu = document.querySelector('#menu')
const contenidoMenu = document.querySelector('#options')


mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});


// window.sr = ScrollReveal();
//     sr.reveal('.banner-contenedor ', {
//         duration: 3000,
//         origin:'left',
//         distance:'100px'
//     });

// window.sr = ScrollReveal();
//     sr.reveal('.centrar',{
//         duration:4000,
//         origin:'left',
//         distance:'-100px'
//     });

// window.sr = ScrollReveal();
//     sr.reveal('.el_titulo',{
//         duration:4000,
//         origin:'top',
//         distance:'-100px'
//     });
// window.sr = ScrollReveal();
//     sr.reveal('.centrar',{
//         duration:4000,
//         origin:'top',
//         distance:'-100px'
//     });
// window.sr = ScrollReveal();
//     sr.reveal('.el_titulo2',{
//         duration:3000,
//         origin:'right',
//         distance:'90px'
//     });
//     window.sr = ScrollReveal();
//     sr.reveal('.centrar2',{
//         duration:3000,
//         origin:'right',
//         distance:'90px'
//     });

