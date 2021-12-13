//referencia de elementos HTML en JS
let boton = document.getElementById("btn");
let imagen = document.getElementById("image");
let txt = document.getElementById("txt");
let menu = ["Panchos", "Hamburguesas", "Milanesas", "Empanadas", "Pastas"];

let magia = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

boton.addEventListener("click", () => {
  imagen.src = "https://media.giphy.com/media/Q0MrhO9BUSxKR8RdZC/giphy.gif";
  txt.innerHTML = "Eligiendo...";
  setTimeout(function () {
    let gana = magia(4, 0);
    txt.innerHTML = "Te recomiendo que comas " + menu[gana];
    if (gana === 0) {
      imagen.src =
        "https://cloudfront-us-east-1.images.arcpublishing.com/artear/LYJBHSREH7OK7N4YTGD3MHDDAE.jpg";
    } else if (gana === 1) {
      imagen.src =
        "https://www.saborusa.com/wp-content/uploads/2019/10/Rompe-la-rutina-con-una-suculenta-hamburguesa-con-queso-Foto-destacada.png";
    } else if (gana === 2) {
      imagen.src =
        "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/s/shutterstock_331445024.jpg";
    } else if (gana === 3) {
      imagen.src = "https://assets.unileversolutions.com/recipes-v2/209726.jpg";
    } else if (gana === 4) {
      imagen.src =
        "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/11/recetas-de-pastas-faciles-y-rapidas.jpg";
    }
  }, 1500);
});
