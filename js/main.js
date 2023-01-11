(function($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target: $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 57)
                },
                1000, "easeInOutExpo");
                return ! 1
            }
        }
    });
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide')
    });
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink")
        } else {
            $("#mainNav").removeClass("navbar-shrink")
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    },
    200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    },
    300);
    $.getJSON('https://www.reddit.com/r/bodyweightfitness/about.json',
    function(data) {
        console.log(data);
        var output = '';
        $.each(data,
        function(key, val) {
            output = data.data.subscribers
        });
        $('#subscribers').html(output)
    });
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    })
})(jQuery);
var userFeed = new Instafeed({
    get: 'user',
    userId: '247436752',
    clientId: '37102235eed94cef9295123e70adbb4a',
    accessToken: '247436752.3710223.f222b1422d094abaa1a356e6cc298cbc',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img width="10%" src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 20,
    links: !1
});
userFeed.run();
function encryptMessage() {
    if (window.crypto.getRandomValues) {
        if (document.getElementById("form").value != "") {
            const publicKeyString = "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" + "\n" + "mQENBFsLjIABCADHR1zmfOKrZUUNFlO17SaWuO2NcGiL4F+x3pc5SiJQzLr7zRyY\n" + "b25FRq8ByiWQbeOFPiRUb5LGsbEcXSmGNiA3aGy4SLIUBqYIRG9kh2JT5AudZKbI\n" + "kbBqJ3SMwsoBu17alhk0JFbcX1axvzw8AmPajInafkAZbM2yW1ESMbRfEH6tIm8h\n" + "PFiumjMmnoC9IteqMmNtIkOtpC+ygN5UIhX6Buh/ol+mgnX6l1NI1oW5iOOAMfy5\n" + "uJWVEUYF9dMMHS8pipJfEmmiqH+nSKNsoI318fxWAnrNt5U5rIkPbNiKJo/eC58z\n" + "ML8XLWE6KqVKDb6J1VUwC4jY2XZg7nWZdqkZABEBAAG0KUNocmlzdG9waGVyIE5n\n" + "byA8aW5nb2NocmlzdGVjaEBnbWFpbC5jb20+iQFOBBMBCAA4FiEEOQ3DGjUuvCOl\n" + "rCfhKL6qnVQre1wFAlsLjIACGwMFCwkIBwIGFQgJCgsCBBYCAwECHgECF4AACgkQ\n" + "KL6qnVQre1x1/QgAhjZ9m07ohOiSboJKNl4toDd+ZW37+zdXMbfcgDTqx1E4+jdW\n" + "Js5D91biaR9qU+djkD75fepoEXtst5L59kuF9AtkbKrCWoabys/iiYaepc8aJYJ+\n" + "TNhT9vb0e9qLy8kO8nH1nYvRsVNd97s+eFTt/hygHroAf0MncnDjWzT+huVg3Xi2\n" + "OHHhRf4n8xF9tdip0Eo1fPF+EixAaAx+fXATj/nefp8Ut9lr/vhc3VqBVhzpEG83\n" + "aGUaZKT1YaUVhkNdg8lTDFp7WWpxhcg3WGHyTXe3kWKhV/M2gBGtB4l72ddY/gFn\n" + "qnBH0dzzndizcQoa6bds3owrxINR91cVUETSQrkBDQRbC4yAAQgAxI+Ij5Bq5fdJ\n" + "53YEkmK4St8UBIIP0Na+mOX0xGUwWy4BsuEWhlfW2IqYd+kblvO+qbd2NzORo3D2\n" + "io5Y02qpKbvwhL0SSrBUBlqvn4LsaPRxZ6W185+AzV5pGNNipNdYEpdDdRznia6w\n" + "ThaY57D2NwAw6uocRFNfoSm1uqicd8k8ZwWSDNROyfb6TJO0c5KBVe65DcdJPf26\n" + "JR3bJH5wlYC+y9ZDjCuRsk3rnZiXjq7me+dOgsxjsOuwqeW+M1+Q/YcgSJMLcS6E\n" + "gk5May7AC3VFXDbA8T69s0pXqEo2bQv+IA81+88R4sTssZJPm//bIQh/l71X4d0b\n" + "cuwidrRvSwARAQABiQE2BBgBCAAgFiEEOQ3DGjUuvCOlrCfhKL6qnVQre1wFAlsL\n" + "jIACGwwACgkQKL6qnVQre1wllgf+M7kcEJr3amErav9qhZBmdbKn9fUqc5UZSgkT\n" + "2J/eHJhYhMIyRb2LD1FEMgoZTJsTxICGVLL/sdHUUGTZ3u18jsX42to0lh2HQlnZ\n" + "Sx41/aLPb8AAa0Lt8gZhPstbkgkga82VmqLogYHdUvgFnbtCJU4UxZyznu18pU3o\n" + "f3ocRHfiqyKpdmz2wFBeYKHt6GzNzpbsG43Thi11PgtIfS4U3DeOBgiSxYDiAALK\n" + "LqCewyYwSpLnqcxtzC/D7Rs+2gEiQrMIi+X2e0Eo3LyIfXO1N9OgnGgQf0YYKMwy\n" + "koNFUE/4n7DwtM7qwdtDDY0NZZXZJSe4/LWptzzCQq1eyZQrJg==\n" + "=k0sg\n" + "-----END PGP PUBLIC KEY BLOCK-----";
            var options = {
                data: document.getElementById("form").value,
                publicKeys: openpgp.key.readArmored(publicKeyString).keys
            };
            openpgp.encrypt(options).then(function(ciphertext) {
                document.getElementById("form").value = ciphertext.data
            });
            document.getElementById("encrypt").disabled = !0;
            document.getElementById("encrypt").title = "Encryption complete.";
            document.getElementById("encrypt").removeEventListener("click", encryptMessage)
        }
    } else {
        window.alert("This browser isn't supported!")
    }
}
function copyForm() {
    var copyText = document.getElementById("form");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value)
}

window.onload = function onLoad() {
    var line = new ProgressBar.Line('#progress', {
        color: '#000000',
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
    });

    function progress() {
      var now = new Date();
      var start = new Date(now.getFullYear(), 0, 1);  // Start of this year
      var end = new Date(now.getFullYear() + 1, 0, 1);  // End of this year
      var done = (now - start) / (end - start);
      var year = new Date().getFullYear();
      var percentStr = (100.0 * done).toString();
      if (done < 0.1) {
          percentStr = percentStr.slice(0, 6);
      } else {
          percentStr = percentStr.slice(0, 7);
      }
      document.getElementById("percent").innerHTML = "Time flies. " + percentStr + "% completed in " + year + ".";
    //   document.getElementById("percent").innerHTML = "Time flies. " + year + " is " + percentStr + "% complete.";
    //   document.getElementById("percent").innerHTML = year + " Progress Bar: " + (100.0 * done).toFixed(6) + "%";
      return done;
    }
  
    line.animate(progress());  // Number from 0.0 to 1.0
  
    setInterval(update, 100);   // update per second 1000
  
    function update() {
      line.set(progress());
    }
  
  };


$('.mynewsexpand').click(function(){
    
    if($(this).text()=='SHOW MORE'){
        $('#mylist').show();
        $(this).text('SHOW LESS');
    }else{
        $('#mylist').hide();
        $(this).text('SHOW MORE');
    }
   
});

var text = $('.content-overflow'),
     btn = $('.btn-overflow'),
       h = text[0].scrollHeight; 

if(h > 120) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function(e) 
{
  e.stopPropagation();

  if (btn.hasClass('less')) {
      btn.removeClass('less');
      btn.addClass('more');
      btn.text('SHOW LESS');

      text.animate({'height': h});
  } else {
      btn.addClass('less');
      btn.removeClass('more');
      btn.text('SHOW MORE');
      text.animate({'height': '10rem'});
  }  
});

