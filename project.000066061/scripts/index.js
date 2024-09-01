//custom.js (god js file because it's quick, dirty, and a small site anyway)
jQuery(document).ready(function($) {
  var height_win = $(window).height();

  //draggable area clickpoint sliding content updater
  $(".tooltip-item").click(function() {
    $(".content-left ul li").fadeOut(200);
    var that = $(this).attr("data-header-text");
    $("." + that).fadeIn(600);
  });
  
  // Menu navigation right (responsive)
  var trigger = $("#hamburger"),
    isClosed = true;
  trigger.click(function() {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  var menuRight = document.getElementById("off-canvas-nav"),
    showRightPush = document.getElementById("hamburger"),
    body = document.body;
  if (!!showRightPush) {
    showRightPush.onclick = function() {
      classie.toggle(this, "active");
      classie.toggle(body, "oc-menu-push-toleft");
      classie.toggle(menuRight, "oc-menu-open");
    };
  }

  //////////Drag & Drop Before - After
  var windowWidth = $(window).width(),
    haft_win = windowWidth / 2;

  $(".wrapper-after").width(windowWidth);

  $(window).resize(function() {
    var windowWidth = $(window).width();
    $(".wrapper-after").css("width", windowWidth + "px");
  });

  $(function() {
    //Dependencies : TweenMax && Draggable
    var $dragMe = $("#dragme");
    var $beforeAfter = $("#before-after");
    var $viewAfter = $(".view-after");
    if ($("#dragme").length == 0) return;
    Draggable.create($dragMe, {
      type: "left",
      bounds: $beforeAfter,
      onDrag: updateImages
    });

    //Intro Animation
    animateTo(haft_win);
    $(window).resize(function() {
      var windowWidth = $(window).width(),
        haft_win = windowWidth / 2;
      animateTo(haft_win);
    });
    function updateImages() {
      var logo = $(".wrapper-logo").offset().left,
        drag = $("#dragme").offset().left;
      if (drag < logo) $(".wrapper-logo").addClass("blue");
         else $(".wrapper-logo").removeClass("blue");
      TweenLite.set($viewAfter, { width: $dragMe.css("left") });
    }

    function animateTo(_left) {
      TweenLite.to($dragMe, 1, { left: _left, onUpdate: updateImages });
    }

    //Click added
    $beforeAfter.on("click", function(event) {
      var eventLeft = event.clientX - $beforeAfter.offset().left;
      animateTo(eventLeft);
    });
  });

  //Scroll show/hide menu (sticky)
  var mywindow = $(window),
      header = $('#header'),
      mypos = mywindow.scrollTop(),
      up = false,
      newscroll;

  mywindow.scroll(function () {
      newscroll = mywindow.scrollTop();
      if (mypos < 100) {
        header.removeClass("sticky");
      }

      if (mypos > 100 && newscroll > mypos && !up) {
          header.stop().animate({
              top: '-90px'
          }, 50);
        header.removeClass("sticky");
          up = !up;
      } else if (newscroll < mypos && up) {
          header.stop().animate({
              top: '0'
          }, 50);
          header.addClass("sticky");
          up = !up;
      }
      mypos = newscroll;
      if (mywindow.scrollTop() + mywindow.height() == $(document).height()) {
          header.stop().animate({
              top: '0'
          }, 50);
          header.addClass("sticky");
      }
    });
  
  //lazy load .lazy gallery images - not applic
  // if (typeof lazy == "function") {
  //   $(".lazy").lazy({
  //     delay: 800,
  //     enableThrottle: true,
  //     throttle: 200,
  //     effect: "fadeIn",
  //     effectTime: 800,
  //     threshold: 0
  //   });
  // }

  //////internal link body fadein-out - no longer applicable as this is now a one-page site
  // $('[data-link="internal"]').click(function() {
  //   event.preventDefault();
  //   newLocation = this.href;
  //   $("body").fadeOut(800, newpage);
  // });

  function newpage() {
    window.location = newLocation;
  }

  //scrollbacktotop button, footer
  $(".scrollToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  //filter case studies
  $(".filters").on("click", ".pill", function () {
   var $this = $(this);
   var id = $this.attr("id");
   $(".pill.pill-selected").removeClass("pill-selected");
   $this.addClass("pill-selected");
   $("#case-studies > [data-tag]").hide();
   if (id == "all") {
    $("#case-studies > [data-tag]").fadeIn(300);
   } else {
    $("#case-studies > [data-tag~='" + id + "']").fadeIn(300);
   }
  });

  ////animated heading - word swapping
  // set animation timing
  var animationDelay = 2000,
      // loading bar effect
      barAnimationDelay = 3000,
      barWaiting = barAnimationDelay - 2000, // 2s is the duration of the transition on the loading bar - set in CSS
      // letters effect
      lettersDelay = 50;

  initHeadline();

  function initHeadline() {
    // insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    // initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function singleLetters($words) {
    $words.each(function() {
      var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
      for (i in letters) {
        if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function() {
      var headline = $(this);
      var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 5;
      spanWrapper.css('width', newWidth);
      if(headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        spanWrapper.css('width', '');
        setTimeout(function(){ spanWrapper.addClass('is-loading') }, barWaiting);
      };
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    if($word.parents('.cd-headline').hasClass('letters')) {
      var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
      setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');
    if(!$letter.is(':last-child')) {
      setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else if($bool) {
      setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    }
    if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');
    if(!$letter.is(':last-child')) {
      setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else {
      if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }
  
  //lightbox card dataref to template id - opener
  document.querySelectorAll('.study-open').forEach(opener => {
    opener.addEventListener('click', e => {    
      basicLightbox.create(document.querySelector(e.target.dataset.ref)).show();
    });
  });
  
//   //shuffle project card order on page load/refresh
//   // Global Variables
//   var grid = $('#case-studies');
//   var cards = grid.children();

//   // Page Refresh to run script below
//   cards.sort(function(){
//     return (Math.round(Math.random()) - 0.5);
//   });
//   grid.remove('.card');
//   for(var i=0; i < cards.length; i++)grid.append(cards[i]);


});
