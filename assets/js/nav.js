var COMMONUI = {
  structure: 
  [
    {
      id: "intro",
      title: "Introduction",
      href: "poc-nav.html"
    },
    {
      id: "cf",
      title: "Common Foundation",
      href: "poc-nav.html",
      jump: "#cf-b"
    },
    {
      id: "guide",
      title: "Style Guide",
      href: "sg.html",
      children:
      [
        {
          id: "webstandards",
          title: "Web Standards",
          href: "sg.html",
          jump: "webstandards-b",
        },
        {
          id: "wscolors",
          title: "Colors",
          klass: "special",
          href: "sg.html",
          jump: "wscolors-b",
          children: [
            {
              id: "wscolorsacc",
              title: "Accessibility",
              href: "sg.html",
              jump: "wscolorsacc-b"
            }
          ]
        }
      ]
    },
    {
      id: "imaginary",
      title: "Pageless Title",
      children: [
        {
          id: "blank",
          title: "Intentionally Blank",
          href: "blank.html"
        }
      ]
    }
  ],
  highlight: function()
  {
    /*
     * Note: Currently, this method of highlighting only supports a
     * flattened directory and unique html filenames. If subdirs need
     * support, "highlight" could be prepended with a subdir by adding
     * a subdir key-val pair to the nav element structure obj; adding
     * a data-nested attribute to the anchor tag should allow
     * duplication of top-level and nested filenames (eg "colors.html"
     * and "accessibility/colors.html"). -- MTM 9/21/2019
     */
    $('a.selected').removeClass("selected");
    var frag      = window.location, path = frag.pathname.substr(frag.pathname.lastIndexOf("/") + 1), hash = frag.hash,
        highlight = hash.length > 0 ? path +  hash : path;
    $('a[href$="' + highlight + '"]').addClass("selected");
  },
  parseItem: function(node)
  {
    var $item = $("<li></li>"),
        $a    = $("<a></a>"),
        href  = "";
    $item.attr("id",node.id);
    if(node.klass)
    {
      $item.addClass(node.klass);
    }

    if( node.href )
    {
      var $j = node.jump;
      href = node.href + ($j ? ($j.indexOf("#") == -1 ? "#" : "") + $j : "");
      $a.attr("href",href).text(node.title);
      $item.append($a);
    }
    else
    {
      $item.text(node.title);
    }

    if(node.children)
    {
      var $childul = $("<ul></ul>");

      $.each(node.children, function(i,o) {
        $childul.append(COMMONUI.parseItem(o));
      });

      $item.append($childul);
    }
    return $item;
  },
  buildNav: function()
  {
    var $ulRoot = $("<ul></ul>"), $li = $("<li></li>");
    $.each(COMMONUI.structure,function(i,v)
    {
      $li = COMMONUI.parseItem(v);
      $ulRoot.append($li);
    });

    $("nav",$("body")).append($ulRoot);
  },
  initPage: function()
  {
    COMMONUI.buildNav();

    COMMONUI.highlight();
    
    $( window ).on( 'hashchange', function( e ) {
      COMMONUI.highlight();
    });
  }

};

