function popupConsent() {
   document.body.insertAdjacentHTML('beforeEnd','<div class="popup" id="popupConsent"><section id="contentPopupConsent"><p>'+cookieConsentOptions["textPopup"]+'</p></section><section id="configureSection"><table><tr><th><div class="switch checked" id="'+cookieConsentOptions.authorization[0].nameCookieAuthorization+'"><div class="circle" id="'+cookieConsentOptions.authorization[0].nameCookieAuthorization+'Circle"></div></div></th><th class="text-switch">'+cookieConsentOptions.authorization[0].textAuthorization+'</th></tr><tr><th><div class="switch checked" id="'+cookieConsentOptions.authorization[1].nameCookieAuthorization+'"><div class="circle" id="'+cookieConsentOptions.authorization[1].nameCookieAuthorization+'Circle"></div></div></th><th class="text-switch">'+cookieConsentOptions.authorization[1].textAuthorization+'</th></tr><tr><th><div class="switch checked" id="'+cookieConsentOptions.authorization[2].nameCookieAuthorization+'"><div class="circle" id="'+cookieConsentOptions.authorization[2].nameCookieAuthorization+'Circle"></div></div></th><th class="text-switch">'+cookieConsentOptions.authorization[2].textAuthorization+'</th></tr></table></section><div class="choice-container-buttons"><button class="c-button" id="accept"><div class="c-ripple js-ripple"><span class="c-ripple-circle-accept"></span></div>'+cookieConsentOptions["textButtonAccept"]+'</button><button class="c-button" id="configure"><div class="c-ripple js-ripple"><span class="c-ripple-circle-configure"></span></div>'+cookieConsentOptions["textButtonConfigure"]+'</button><button class="c-button" id="enregistre"><div class="c-ripple js-ripple"><span class="c-ripple-circle-enregistre"></span></div>'+cookieConsentOptions["textButtonSave"]+'</button></div></div><div id="backgroundPopup"></div>');
  //--------------Switch button-----------------
  $(".switch")
    .click(function () {
      let idSwitch = "#" + $(this)
        .attr('id');
      let idCircleSwitch = idSwitch + "Circle";
      
      if ($(idSwitch)
        .hasClass('checked')) {
        $(idCircleSwitch)
          .removeClass("move-circle-right")
          .addClass("move-circle-left");
        $(idSwitch)
          .removeClass("checked");
      } else {
        $(idCircleSwitch)
          .removeClass("move-circle-left")
          .addClass("move-circle-right");
        $(idSwitch)
          .addClass("checked");
      }
    });
  // -------------Button ripple---------------
  ;
  (function ($, window, document, undefined) {
    'use strict';
    var $ripple = $('.js-ripple');
    $ripple.on('click.ui.ripple', function (e) {
      
      let idButton = $(this)
        .parents()
        .attr('id');
      var $this = $(this);
      var $offset = $this.parent()
        .offset();
      var $circle = $this.find('.c-ripple-circle-' + idButton);
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
      
      $circle.css({
        top: y + 'px'
        , left: x + 'px'
      });
      $this.addClass('is-active');
    });
    $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function (e) {
      $(this)
        .removeClass('is-active');
    });
  })(jQuery, window, document);
  
  // -------------Popup---------------
  $(document)
    .ready(function () {
      
      let date = new Date(Date.now() + 31536000000); //31536000000 = 365 jour
      date = date.toUTCString();
      
      let popupConsent = $('#popupConsent');
      let acceptButton = $("#accept");
      let configureButton = $("#configure");
      let enregistreButton = $("#enregistre");
      let configureSection = $('#configureSection');
      let contentPopupConsent = $('#contentPopupConsent');
      
      
      function getCookieValue(name) {
        let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
        return result ? result.pop() : ""
      }
      
      if (!getCookieValue("cookieConsent")) {
        $(popupConsent)
          .show(200);
        document.getElementById("backgroundPopup")
          .classList.add('background-popup');
      }
      
      $(acceptButton)
        .click(function () {
          $(popupConsent)
            .fadeOut(1000);
          document.cookie = cookieConsentOptions['nameCookieAuthorization1'] +
            '=true; path=/; expires=' + date;
          document.cookie = 'targetedAdvertising=true; path=/; expires=' + date;
          document.cookie = 'cookieConsent=true; path=/; expires=' + date;
          document.cookie = 'popupConsent=true; path=/; expires=' + date;
          document.getElementById("backgroundPopup")
            .classList.remove('background-popup');
          (adsbygoogle = window.adsbygoogle || [])
          .pauseAdRequests = 0;
          (adsbygoogle = window.adsbygoogle || [])
          .push({});
        });
      
      $(configureButton)
        .click(function () {
          $(configureButton)
            .fadeOut(0);
          $(enregistreButton)
            .fadeIn(0);
          $(contentPopupConsent)
            .fadeOut(0);
          $(configureSection)
            .fadeIn(1000);
        });
      
      $(enregistreButton)
        .click(function () {
          $(popupConsent)
            .fadeOut(1000);
          document.getElementById("backgroundPopup")
            .classList.remove('background-popup');
          // Insérer les cookies
          if (!$('#' + cookieConsentOptions['nameCookieAuthorization1'])
            .hasClass('checked')) {
            document.cookie = cookieConsentOptions['nameCookieAuthorization1'] +
              '=false; path=/; expires=' + date;
          }
          if ($('#' + cookieConsentOptions['nameCookieAuthorization1'])
            .hasClass('checked')) {
            document.cookie = cookieConsentOptions['nameCookieAuthorization1'] +
              '=true; path=/; expires=' + date;
          }
          if (!$('#' + cookieConsentOptions['nameCookieAuthorization2'])
            .hasClass('checked')) {
            document.cookie = cookieConsentOptions['nameCookieAuthorization2'] +
              '=false; path=/; expires=' + date;
            (adsbygoogle = window.adsbygoogle || [])
            .requestNonPersonalizedAds = 1;
          }
          if ($('#' + cookieConsentOptions['nameCookieAuthorization2'])
            .hasClass('checked')) {
            document.cookie = cookieConsentOptions['nameCookieAuthorization2'] +
              '=true; path=/; expires=' + date;
          }
          if (!$('#' + cookieConsentOptions['nameCookieAuthorization3'])
            .hasClass('checked')) {
            document.cookie = cookieConsentOptions['nameCookieAuthorization3'] +
              '=false; path=/; expires=' + date;
          }
          if ($('#' + cookieConsentOptions['nameCookieAuthorization3'])
            .hasClass('checked')) {
            document.cookie = cookieConsentOptions['nameCookieAuthorization3'] +
              '=true; path=/; expires=' + date;
          }
          document.cookie = 'popupConsent=true; path=/; expires=' + date;
        });
    });
}
