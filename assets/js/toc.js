$(document).ready(function () {
    var ToC =
        "<nav role='navigation' class='example toc'>" +
        "<h4 class='ul-ui header'>Common UI/UX</h4>" +
        "<div class='ul-ui middle aligned divided list'>" +
        "<div class='item'>" +
        "<div class='content'>" +
        "<div class='header'>Introduction</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='item'>" +
        "<div class='content'>" +
        "<div class='header'>Common Foundation</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='item'>" +
        "<div class='content'>" +
        "<div class='header'>Style Guide</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='item'>" +
        "<div class='content'>" +
        "<div class='header'>Component Library</a>" +
        "</div>" +
        //"<a id='typography' class='item block' href='typography.html'>Typography</a>" +
        //"<a id='alerts' class='item block' href='alerts.html'>Alerts</a>" +
        "<a id='buttons' class='item block' href='buttons.html'>Anchors &amp; Buttons</a>" +
        //"<a id='lists' class='item block' href='lists.html'>Lists</a>" +
        //"<a id='menu' class='item block' href='menu.html'>Menus</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</nav>";
    $("article").prepend(ToC);
});
