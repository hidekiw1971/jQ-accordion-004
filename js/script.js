
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // 
  $(function () {
    $(".js-accordion-title").on("click", function () {
      $(".js-accordion-title").not(this).removeClass("open");
      $(".js-accordion-title").not(this).next().slideUp(300);
      $(this).toggleClass("open");
      $(this).next().slideToggle(300);

      // $(this).next().slideToggle(300);
      // $(this).toggleClass("open", 300);
    });
  });
  // 
});
