// // $('.grid').packery({
// //   // options
// //   itemSelector: '.grid-item',
// //   gutter: 10
// // });


//PACKERY.JS JAVASCRIPT
//// external js: packery.pkgd.js, jquery-ui-draggable.js
// initialize Packery
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  // columnWidth helps with drop positioning
  columnWidth: 100,
  horizontal: true

});
// make all items draggable
var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
$grid.packery( 'bindUIDraggableEvents', $items );



//FACEBOOK SDK JAVASCRIPT

{/* <div id="fb-root"></div> */}
(
  function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=163997500904054&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));