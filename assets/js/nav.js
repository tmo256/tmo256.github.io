var COMMONUI = {
  structure: 
  [
    {
      id: "intro",
      title: "Introduction",
      href: "index.html"
    },
    {
      id: "cf",
      title: "Common Foundation",
      href: "common-foundation.html",
      jump: "#cf-b"
    },
    {
      id: "guide",
      title: "Style Guide",
      href: "style-guide.html",
      children:
      [
        {
          id: "webstandards",
          title: "Web Standards",
          href: "style-guide.html",
          jump: "ws-a",
        },
        {
          id: "i18n",
          title: "Internationalization (i18n)",
          href: "style-guide.html",
          jump: "int-a",
        },
        {
          id: "common",
          title: "Common Terminology",
          href: "style-guide.html",
          jump: "ct-a",
        },
        {
          id: "typeo",
          title: "Typography",
          href: "style-guide.html",
          jump: "tp-a",
        },
        {
          id: "wscolors",
          title: "Colors",
          klass: "special",
          href: "style-guide.html",
          jump: "co-a",
          children: [
            {
              id: "wscolorsacc",
              title: "Accessibility",
              href: "style-guide.html",
              jump: "ca-a"
            }
          ]
        },
        {
          id: "icons",
          title: "Icons",
          href: "style-guide.html",
          jump: "ic-a",
        },
        {
          id: "style-resp",
          title: "Responsiveness",
          href: "style-guide.html",
          jump: "res-a",
        },
      ]
    },
    {
      id: "accessibility",
      title: "Accessibility",
      href: "accessibility.html",
      children:
      [
       { 
          id: "access-coding",
          title: "Coding General HTML Elements",
          href: "accessibility.html",
          jump: "ac-a",
        },
       { 
          id: "access-images",
          title: "Images",
          href: "accessibility.html",
          jump: "img-a",
        }
      ]
    },
    {
      id: "layout",
      title: "Layout",
      href: "layout.html",
      children:
      [
       { 
          id: "layout-header",
          title: "Header / Navigation",
          href: "layout.html",
          jump: "hn-a",
        },
       { 
          id: "layout-footer",
          title: "Footer",
          href: "layout.html",
          jump: "lf-a",
        },
        {
          id: "templates",
          title: "HTML Templates",
          href: "template.html",
          children:
          [
            {
              id: "css-flex",
              title: "Flexbox Layout",
              href: "index-flexbox.html"
            },
            {
              id: "css-grid",
              title: "CSSGrid Layout",
              href: "index-cssgrid.html"
            }
          ]
        }
      ]
    },
    {
      id: "component-library",
      title: "Component Library",
      href: "component-library.html",
      children:
      [
       { 
          id: "alerts",
          title: "Alerts",
          href: "alerts.html",
          jump: "ale-a",
          children:
          [
            {
              id: "alerts-accessibility",
              title: "Accessibility",
              href: "alerts.html",
              jump: "acce-a",
            }
          ]
        },
       { 
          id: "anchors",
          title: "Anchors & Buttons",
          href: "anchors.html",
          children:
          [
            {
              id: "buttons-coding",
              title: "Buttons: Coding",
              href: "anchors.html",
              jump: "butc-a",
            },
            {
              id: "buttons-styling",
              title: "Buttons: Styling",
              href: "anchors.html",
              jump: "buts-a",
            },
            {
              id: "buttons-disabled",
              title: "Buttons: Disabled",
              href: "anchors.html",
              jump: "butd-a",
            },
            {
              id: "anchors-coding",
              title: "Anchors: Coding",
              href: "anchors.html",
              jump: "anc-a",
            },
            {
              id: "anchors-styling",
              title: "Anchors: Styling",
              href: "anchors.html",
              jump: "ancs-a",
            },
            {
              id: "anchors-disabled",
              title: "Anchors: Disabled",
              href: "anchors.html",
              jump: "ancd-a",
            },
            {
              id: "anchors-inputs",
              title: "Inputs / Submits",
              href: "anchors.html",
              jump: "is-a",
            },
            {
              id: "anchors-other",
              title: "Other Cases",
              href: "anchors.html",
              jump: "otc-a",
            },
          ]
        },
       { 
          id: "confirm",
          title: "Confirmation Dialogs",
          href: "anchors.html",
          jump: "cond-a",
        },
       { 
          id: "forms",
          title: "Forms",
          href: "forms.html",
          children:
          [
            {
              id: "forms-input",
              title: "Input Types",
              href: "forms.html",
              jump: "int-a",
             },
            {
              id: "forms-buttons",
              title: "Buttons and Links",
              href: "forms.html",
              jump: "bl-a",
             },
            {
              id: "forms-submit",
              title: "Submit Events",
              href: "forms.html",
              jump: "se-a",
             },
            {
              id: "forms-js",
              title: "Javascript Validations",
              href: "forms.html",
              jump: "jv-a",
             },
            {
              id: "forms-success",
              title: "Success & Error Handling",
              href: "forms.html",
              jump: "seh-a",
             },
          ]
        },
       { 
          id: "images",
          title: "Images",
          href: "images.html",
          children:
          [
            {
              id: "images-responsive",
              title: "Responsive Images",
              href: "images.html",
              jump: "resi-a",
            },
            {
              id: "images-size",
              title: "Images Sizing and Resolution",
              href: "images.html",
              jump: "sr-a",
            },
            {
              id: "images-format",
              title: "Image File Formats",
              href: "images.html",
              jump: "ff-a",
            },
            {
              id: "images-opt",
              title: "Image Optimization",
              href: "images.html",
              jump: "opt-a",
            },
          ]
        },
       { 
          id: "modals",
          title: "Modals",
          href: "modals.html",
        },
       { 
          id: "tables",
          title: "Tables",
          href: "tables.html",
          children:
          [
            {
              id: "tables-resp",
              title: "Responsive Tables",
              href: "tables.html",
              jump: "rt-a",
            },
            {
              id: "tables-sort",
              title: "Sorting",
              href: "tables.html",
              jump: "sort-a",
            },
            {
              id: "tables-access",
              title: "Accessibility",
              href: "tables.html",
              jump: "tacc-a",
            },
          ]
        },
       { 
          id: "tabs",
          title: "Tabs",
          href: "tabs.html",
        },
       { 
          id: "tool",
          title: "Tooltips & Popovers",
          href: "tooltips.html",
          children:
          [
            {
              id: "tooltips-access",
              title: "Accessibility",
              href: "tables.html",
              jump: "toacc-a",
            },
          ]
        },
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

    $("nav").scrollTop($('a.selected').position().top);
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
  setCodeToggle: function()
  {
    $(".codeview").click(function(ev){
      $(this).parent().siblings(".code").slideToggle(function(e){
        $(this).attr('aria-pressed', function(_, attr){ return !(/true/i).test(attr); })
      }.bind(this,ev));
    });
  },
  initPage: function()
  {
    COMMONUI.buildNav();

    COMMONUI.highlight();

    $( window ).on( 'hashchange', function( e ) {
      COMMONUI.highlight();
    });
    
    COMMONUI.setCodeToggle();
  }

};

