// ! Pre Loader By Jquery

$(window).on("load", function () {
  $("#pre_Loader").fadeOut(2000);
});

// =======================<<<<<>>>>>=======================


// ! Custom Fixed NavBar

// $(function () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > 400) {
//       $("header").addClass("sticky");
//     } else {
//       $("header").removeClass("sticky");
//     }
//   });
// });

// =======================<<<<<>>>>>=======================


// ! Back To Top (Jquery)

let btn = $('#backToTop');
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '1000');
});

//mobile
function closeAllMenus() {
  // Close all menus by setting their display to "none"
  document.getElementById("call_menu").style.display = "none";
  document.getElementById("demo_menu").style.display = "none";
  document.getElementById("toggleUsers").style.display = "none";
  document.getElementById("call_menu_m").style.display = "none";
  document.getElementById("demo_menu_m").style.display = "none";
}

// Mobile: Header button call or text open
function toggleMenum() {
  const menu = document.getElementById("call_menu_m");
  if (menu.style.display === "none" || menu.style.display === "") {
    closeAllMenus(); // Close other menus
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Mobile: Header button demo open
function toggleDemom() {
  const menu = document.getElementById("demo_menu_m");
  if (menu.style.display === "none" || menu.style.display === "") {
    closeAllMenus(); // Close other menus
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Web: Header button call or text open
function toggleMenu() {
  const menu = document.getElementById("call_menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    closeAllMenus(); // Close other menus
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Web: Header button demo open
function toggleDemo() {
  const menu = document.getElementById("demo_menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    closeAllMenus(); // Close other menus
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Web: Header user menu open
function toggleUser() {
  const menu = document.getElementById("toggleUsers");
  if (menu.style.display === "none" || menu.style.display === "") {
    closeAllMenus(); // Close other menus
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// moumi
//counter
var counted = 0;
$(window).scroll(function () {
  var oTop = $('#counter').offset().top - window.innerHeight; // Corrected ID
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = parseInt($this.attr('data-count').replace(/\D/g, '')); // Removing non-numeric characters for animation
      $({ countNum: 0 }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(countTo.toLocaleString() + $this.attr('data-count').replace(/\d/g, '')); // Adding suffixes back
          }
        }
      );
    });
    counted = 1;
  }
});
// ========================================

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";


}
document.getElementById("defaultOpen").click();

// document.addEventListener("DOMContentLoaded", function() {
//     // Simulate a click on the first tab to set it as the default
//     const defaultTab = document.querySelector(".tabcontent");
//     if (defaultTab) {
//         defaultTab.click();
//     }
// });



//  ==========================================
//shreyasi
//navbar
// =======================<<<<<>>>>>=======================
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("my_nav");
  const navbarCollapse = document.getElementById("navbarNav");
  const menuBarIcon = navbarToggler.querySelector(".MenuBar svg");

  // Toggle Navbar on Click
  navbarToggler.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      // Close the menu and show the hamburger icon
      navbarCollapse.classList.remove("show");
      menuBarIcon.innerHTML = `
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        `; // Hamburger icon
    } else {
      // Open the menu and show the close (X) icon
      navbarCollapse.classList.add("show");
      menuBarIcon.innerHTML = `
          <path d="M176-704l48-48 256 256 256-256 48 48-256 256 256 256-48 48-256-256-256 256-48-48 256-256-256-256Z"/>
        `; // Cross (X) icon
    }
  });
});
// ==============================================================================

// mobile slider
//gift voucher slider
var swiper = new Swiper(".gift_voucher_slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 3000,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    668: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
//testimonal slider
var swiper = new Swiper(".tstmnl_inner_slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 3000,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
//client slider
var swiper = new Swiper(".client_slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    }

  },
});
//alliance slider
var swiper = new Swiper(".alliance_slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    }

  },
});