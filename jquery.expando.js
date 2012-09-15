/*
 * Expando - jQuery Plugin
 * Your text will grow on you!
 *
 * Copyright (c) 2012 Andrew Cantino
 *
 * Version: 0.1.0 (9/14/2012)
 * Requires: jQuery, jQuery UI
 *
 * Licensed under the MIT License
 *   http://www.opensource.org/licenses/mit-license.php
 */

;
(function($) {
  $.fn.expando = function(options) {
    options = options || {};
    if (!$(this).length) return this;

    if (options === "expandAll") {
      $(this).find(".expander:not(.activated), expander:not(.activated)").each(function() {
        $(this).expando("expand");
      });
    } else if (options === "expand") {
       $(this).each(function() {
         $(this).data("expandFunction") && $(this).data("expandFunction")(true);
       });
    } else {
      $(this).addClass("expando-region").find("expando, .expando").each(function() {
        var initial = $(this).children("initial, .initial").show();
        var expanded = $(this).children("expanded, .expanded").hide();

        if (initial.children("a").length) {
          var scope = initial.children("a");
        } else {
          var scope = initial.wrap("<a>").parent();
          initial = initial.parent();
        }

        scope.addClass("expander").data("expandFunction", function() {
          scope.addClass('activated');
          initial.hide();
          expanded.show();

          expanded.css("color", options.expansionStartColor || "#EF7A28").animate({
            color: options.expansionEndColor || "#444"
          }, options.colorFadeTime || 2000);

          expanded.children(".break").animate({
            marginBottom: options.expansionBreakMargin || "25px"
          }, options.breakOpenTime || 300);

          expanded.trigger("expando.expanded");
        }).click(function() {
          $(this).expando("expand");
        });
      });
    }

    return this;
  };
})(jQuery);
