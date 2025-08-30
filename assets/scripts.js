window.addEventListener("load", function () {
  var currentTheme = localStorage.getItem("theme");
  var imageMobile = document.getElementById("mode-toggle");
  var imageDesktop = document.getElementById("mode-toggle-desktop");
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    imageMobile.src = "assets/public/icon/icon_sun.svg";
    imageMobile.alt = "assets/public/icon/icon_moon.svg";
    imageDesktop.src = "assets/public/icon/icon_sun.svg";
    imageDesktop.alt = "assets/public/icon/icon_moon.svg";
  } else {
    imageMobile.src = "assets/public/icon/icon_moon.svg";
    imageMobile.alt = "assets/public/icon/icon_sun.svg";
    imageDesktop.src = "assets/public/icon/icon_moon.svg";
    imageDesktop.alt = "assets/public/icon/icon_sun.svg";
  }
});

window.addEventListener("scroll", reval);

function reval() {
  var revals = document.querySelectorAll(".reval");

  for (var i = 0; i < revals.length; i++) {
    var windowheight = window.innerHeight;
    var revaltop = revals[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if (revaltop < windowheight - revealpoint) {
      revals[i].classList.add("active");
    } else {
      revals[i].classList.remove("active");
    }
  }
}

/* Filtrage */
var filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var filterValue = button.getAttribute('data-filter');
    var items = document.querySelectorAll('.item');

    items.forEach(function (item) {
      if (filterValue === 'all') {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
        if (item.classList.contains(filterValue)) {
          item.classList.add('show');
        }
      }
    });
  });
});

// ajouter la classe "show" à tous les éléments "item"
document.querySelectorAll('.item').forEach(function (item) {
  item.classList.add('show');
});


// définir la hauteur maximale de la barre de progression
window.onload = () => {
  // Ecouteur d'évènement sur scroll
  window.addEventListener("scroll", () => {
    // Calcul de la hauteur "utile" du document
    let hauteur = document.documentElement.scrollHeight - window.innerHeight

    // Récupération de la position verticale
    let position = window.scrollY

    // Récupération de la largeur de la fenêtre
    let largeur = document.documentElement.clientWidth

    // Calcul de la largeur de la barre
    let barre = position / hauteur * largeur

    // Modification du CSS de la barre
    document.getElementById("progress").style.width = barre + "px"
  })
}


/* Dark Mode desktop  */
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark");

  var image = document.getElementById("mode-toggle");
  if (element.classList.contains("dark")) {
    image.src = "assets/public/icon/icon_sun.svg";
    image.alt = "assets/public/icon/icon_moon.svg";
  } else {
    image.src = "assets/public/icon/icon_moon.svg";
    image.alt = "assets/public/icon/icon_sun.svg";
  }
}
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark");

  // Si le thème sombre est activé, stocke-le dans le Local Storage
  if (element.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  }
  // Sinon, stocke le thème par défaut (clair) dans le Local Storage
  else {
    localStorage.setItem("theme", "light");
  }

  /* Change l'icône du bouton en fonction du thème */
  var imageMobile = document.getElementById("mode-toggle");
  var imageDesktop = document.getElementById("mode-toggle-desktop");
  if (element.classList.contains("dark")) {
    imageMobile.src = "assets/public/icon/icon_sun.svg";
    imageMobile.alt = "assets/public/icon/icon_moon.svg";
    imageDesktop.src = "assets/public/icon/icon_sun.svg";
    imageDesktop.alt = "assets/public/icon/icon_moon.svg";
  }
  else {
    imageMobile.src = "assets/public/icon/icon_moon.svg";
    imageMobile.alt = "assets/public/icon/icon_sun.svg";
    imageDesktop.src = "assets/public/icon/icon_moon.svg";
    imageDesktop.alt = "assets/public/icon/icon_sun.svg";
  }
}

function applyTheme() {
  /* Récupère le thème actuel à partir du Local Storage */
  var currentTheme = localStorage.getItem("theme");

  /* Si le thème est défini sur "sombre", active le thème sombre */
  if (currentTheme === "dark") {
    document.body.classList.add("dark");

    /* Change l'icône du bouton en mode sombre */
    var image = document.getElementById("mode-toggle");
    image.src = "assets/public/icon/icon_sun.svg";
    image.alt = "assets/public/icon/icon_moon.svg";
  }
  else {
    /* Change l'icône du bouton en mode clair */
    var image = document.getElementById("mode-toggle");
    image.src = "assets/public/icon/icon_moon.svg";
    image.alt = "assets/public/icon/icon_sun.svg";
  }
}

applyTheme();

/* Applique le thème sauvegardé lorsqu'une nouvelle page est chargée */
window.addEventListener("load", function () {
  applyTheme();
})