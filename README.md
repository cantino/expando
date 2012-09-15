# jquery.expando
## A jQuery plugin for making text that grows on you

To see this plugin in action, checkout [andrewcantino.com](http://andrewcantino.com).

# Usage

Option 1: Works in IE 9, Chrome, Firefox, Safari.

    <!doctype html>
    <html>
      <head>
        <title>Example</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>

        <script src='jquery.expando.js'></script>
        <link rel="stylesheet" type="text/css" href="expando.css" media="all" />

        <script>
          $(function() {
            $(".about-me").expando();
          });
    		</script>
      </head>

      <body>
        <div class='about-me'>
          I like to
          <expando>
            <initial><a>program</a> and</initial>
            <expanded>
              program, for example in JavaScript and Ruby.  I also like to
            </expanded>
          </expando>
          <expando>
            <initial><a>hike</a>.</initial>
            <expanded>
              explore the
              <expando>
                <initial>hills</initial>
                <expanded>
                  hills, valleys, and mountains
                </expanded>
              </expando>
              surrounding San Francisco.
            </expanded>
          </expando>
        </div>
      </body>
    </html>

Option 2: Works on the above, plus IE 8.

    I like to
    <span class='expando'>
      <span class='initial'><a>program</a>.</span>
      <span class='expanded'>
        program, for example in JavaScript and Ruby.
        <div class='break'></div>
      </span>
    </span>

If you'd like to write in the first format, but deploy in the second (for IE8 support), check out the `bin/rewrite.rb` script:

    bin/rewrite.rb example.html example-processed.html

You can add `<div class='break'></div>` to create line breaks that expand with their `<expanded>` block:

    I like to
    <expando>
      <initial><a>program</a>.</initial>
      <expanded>
        program, for example in JavaScript and Ruby.
        <div class='break'></div>
      </expanded>
    </expando>

Expanded blocks trigger a jQuery `expando.expanded` event that you can bind to for custom behavior.

You can programmatically expand an `expander` by calling `expando('expand')` on it, like so: `$(".about-me expander").expando('expand')`

You could expand everything with: `$(".about-me").expando("expandAll")`

Customize colors and spacing with options:

    $(".about-me").expando({
      expansionStartColor: "#EF7A28",
      expansionEndColor: "#444",
      expansionBreakMargin: "25px",
    });
