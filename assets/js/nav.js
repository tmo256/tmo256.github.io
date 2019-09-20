var COMMONUI = {
  structure: 
  {
    intro:
    {
      id: "intro",
      title: "Introduction",
      href: "poc-nav.html"
    },
    found:
    {
      id: "cf",
      title: "Common Foundation",
      href: "poc-nav.html",
      jump: true
    },
    guide:
    {
      id: "guide",
      title: "Style Guide",
      href: "sg.html",
      children: [
        {
          id: "webstandards",
          title: "Web Standards",
          href: "sg.html",
          jump: true
        },
        {
          id: "wscolors",
          title: "Colors",
          klass: "special",
          href: "sg.html",
          jump: true,
          children: [
            {
              id: "wscolorsacc",
              title: "Accessibility",
              href: "sg.html",
              jump: true
            }
          ]
        }
      ]
    }
  },
  highlight: function()
  {
    $('a.selected').removeClass("selected");
    var frag      = window.location, path = frag.pathname.substr(1), hash = frag.hash,
        highlight = hash.length > 0 ? path +  hash : path;
    $('a[href~="' + highlight + '"]').addClass("selected");
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
    href = node.href + (node.jump ? "#" + node.id + "-b" : "");
    $a.attr("href",href).text(node.title);

    $item.append($a);

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
    $.each(COMMONUI.structure,function(k,v)
    {
      $li = COMMONUI.parseItem(v);
      $ulRoot.append($li);
    });

    $("nav",$("body")).append($ulRoot);

    COMMONUI.highlight();
    
    $( window ).on( 'hashchange', function( e ) {
      COMMONUI.highlight();
    });
  }
};

