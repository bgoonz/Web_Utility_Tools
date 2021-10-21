  <!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html">
  <meta name="Author" content="Bryan Guner">

  <title> directory </title>
  <script async src="./../script.js">
</script>

<script>
    document.getElementsByTagName( "html" )[ 0 ].className = "js";
    $( '.iframe' ).responsiveIframes();
  </script>
  <style>
    iframe {
      resize: both;

    }

    a {
      color: black;
    }

    li {
      border: 1px solid black !important;
      font-size: 20px;
      letter-spacing: 0px;
      font-weight: 700;
      line-height: 16px;
      text-decoration: none !important;
      text-transform: uppercase;
      background: #194ccdaf !important;
      color: black !important;
      border: none;
      cursor: pointer;
      justify-content: center;
      padding: 30px 60px;
      height: 48px;
      text-align: center;
      white-space: normal;
      border-radius: 10px;
      min-width: 45em;
      padding: 1.2em 1em 0;
      box-shadow: 0 0 5px;
      margin: 1em;
      display: grid;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      -ms-border-radius: 10px;
      -o-border-radius: 10px;
    }

    /* iframe */

    .iframe {
      border: 3px solid #131C28;
      overflow: hidden;
      background: #fff;
      border-radius: 15px;
    }

    .iframe iframe {
      width: 100%;
      height: 400px;
      border: 0;
      display: block;
    }

    .iframe-header {
      display: none;
    }

    .js .iframe-header {
      display: block;
    }

    .iframe-content {
      /* ipad iframe hack */
      height: 500px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    .iframe-header a {
      font-size: 18px;
      color: white;
      background: #000000;
      display: block;
      padding: 15px;
      text-align: center;
      border-bottom: 3px solid #131C28;
    }

    .iframe-header a:hover,
    .iframe-header a:focus {
      background: #00122c;
    }

    .iframe-full-screen .iframe-header {
      display: block;
      position: absolute;
      height: 50px;
      width: 100%;
    }

    .iframe-full-screen .iframe-content {
      position: absolute;
      top: 50px;
      bottom: 0;
      width: 100%;
      height: auto;
    }

    .iframe-full-screen .iframe-header a {
      padding: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border: 3px solid #131C28;
    }

    .iframe-full-screen body {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .iframe-full-screen .iframe.iframe-active {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 9999;
      border: none;
    }

    .iframe-full-screen .iframe iframe {
      position: absolute;
      height: 100%;
      width: 100%;
      border: none;
    }

    .wrapper {
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px 20px;
      display: flex;
      flex-wrap: wrap
    }

    .item {
      display: inline-block;
      flex: 1 300px;
    }

    @media all and (max-height: 400px) {
      .iframe {
        height: 300px;
      }
    }
  </style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">
</head>

<body>

  <div class="wrapper">



<ul>
      <div class="item">
        <div class="iframe">
          <iframe src="./1-top-bar/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./10-search-dropdown/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./11-ios-style-popover/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./12-sliding-tags/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./13-profile-popover/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./14-to-do-list/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./15-push-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./16-social-app/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./17-selection-widget/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./18-vertical-navigation/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./19-date-picker/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./2-dark-navigation/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./20-graphite-navigation/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./21-toggle-switches/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./22-progress-bar-anim/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./23-dark-login-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./24-light-horizontal-nav/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./25-dark-horizontal-nav/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./26-download-widget/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./27-transparent-window/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./28-notepaper/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./29-inset-navigation/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./3-tabbed-navigation/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./30-calculator/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./31-growl-notifications/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./32-month-picker/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./33-newsletter-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./34-settings-panel/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./35-share-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./36-dropdown-lists/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./37-dark-pagination/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./38-multi-colored-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./39-analytics-widget/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./4-menu-notifications/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./40-notification-windows/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./41-notepad/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./42-app-navigation/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./43-contact-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./44-metal-progress-bar/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./45-facebook-login/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./46-social-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./47-pricing-table/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./48-glossy-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./49-flip-down-clock/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./5-progress-bars/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./50-dark-datepicker/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./51-checkout-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./52-check-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./53-tabbed-widget/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./54-sign-up-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./55-checkout-widget/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./56-task-list/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./57-download-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./58-simple-switch/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./59-plans-table/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./6-little-calendar/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./60-registration-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./61-action-buttons/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./7-mini-dropdown-menu/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./8-login-form/index.html"> </iframe>
        </div>
      </div>
      <div class="item">
        <div class="iframe">
          <iframe src="./9-3d-buttons/index.html"> </iframe>
        </div>
      </div>

</ul>
</body>
</html>
