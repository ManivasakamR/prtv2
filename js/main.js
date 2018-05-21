
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

  	/*====================================
    Pretty Photo
    ======================================*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();

particlesJS("particles-js", {
    "particles": {
    "number": {
    "value": 80,
    "density": {
    "enable": true,
    "value_area": 700
    }
    },
    "color": {
    "value": "#ffffff"
    },
    "shape": {
    "type": "circle",
    "stroke": {
    "width": 0,
    "color": "#000000"
    },
    "polygon": {
    "nb_sides": 5
    },
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
    }
    },
    "size": {
    "value": 3,
    "random": true,
    "anim": {
    "enable": false,
    "speed": 40,
    "size_min": 0.1,
    "sync": false
    }
    },
    "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
    },
    "move": {
    "enable": true,
    "speed": 5,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": true,
    "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
    }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
    "onhover": {
    "enable": false,
    "mode": "grab"
    },
    "onclick": {
    "enable": false,
    "mode": "push"
    },
    "resize": true
    },
    "modes": {
    "grab": {
    "distance": 140,
    "line_linked": {
      "opacity": 1
    }
    },
    "bubble": {
    "distance": 400,
    "size": 40,
    "duration": 2,
    "opacity": 8,
    "speed": 3
    },
    "repulse": {
    "distance": 200,
    "duration": 0.4
    },
    "push": {
    "particles_nb": 4
    },
    "remove": {
    "particles_nb": 2
    }
    }
    },
    "retina_detect": true
    });
    var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    var that = this;
    var delta = 200 - Math.random() * 100;
    
    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
    
    setTimeout(function() {
    that.tick();
    }, delta);
    };
    window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #f53030; font : normal 300 50px/1 'Josefin Sans', sans-serif; margin-left:10%; }";
    document.body.appendChild(css);
    };