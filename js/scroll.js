
// ==== FONTION QUI EFFECTUE LE SCROLL VERS UNE ANCRE
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// === DEFINITION DES VARIABLES
// variable de position par rapport au haut de page
var presentation = $('#presentation').offset().top;
var ingredient = $('#ingredient').offset().top;
var menus = $('#menus').offset().top;
var avis = $('#avis').offset().top;
var reservation = $('#reservation').offset().top;
var footer = $('#footer').offset().top;

// fonction qui verifie si le lien est déjà actif
var linkActive = ['accueil'];
var changeActive = function (link) {
    if (linkActive[0] != link) {
        $('a[href="#' + linkActive[0] + '"]').removeClass("activeLink");
        linkActive[0] = link;
        $('a[href="#' + link + '"]').addClass("activeLink");
    }
};

// fonction exécutée lors du scroll
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    // condition pour changer l'opacité du la navbar
    if ( 50 < scrollTop ) {
        $(".navbar").css('background','rgba(0,0,0,1)');
        $(".navbar-nav a").css('color','black');
    }
    else {
        $(".navbar").css('background','rgba(0,0,0,0)');
        $(".navbar-nav>li>a").css('color','white !important');
    }

    // condition pour l'affichage de la bordure de l'élément actif
    switch (true) {
      case (scrollTop < presentation):
            changeActive('accueil');
        break;
      case (scrollTop < ingredient):
            changeActive('presentation');
        break;
      case (scrollTop < menus):
            changeActive('ingredient');
        break;
      case (scrollTop < avis):
            changeActive('menus');
        break;
      case (scrollTop < reservation):
            changeActive('avis');
        break;
      case (scrollTop < footer):
            changeActive('reservation');
        break;
      case (scrollTop > footer):
            changeActive('footer');
        break;
    }
});

// redimentionnement de chaque section en fonction de la taille de l'écran
var height = $(window).height();
$('.sections').css('min-height', height+'px');
