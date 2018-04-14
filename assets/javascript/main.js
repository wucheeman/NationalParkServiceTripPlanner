// main.js



// SEARCH FOR A PARK - BIG BUTTON on(click)
// ========================================================================
// $("#searchBtn").on("click", function (event) {
//   //prevents on click from resorting to default state
//   event.preventDefault();
//   // console.log(searchBtn);
//   //CLEAR PARK INFO SECTION
//   emptyNPS();
//   // JQUERY APPEND TO DYNAMICALLY INSERT SEARCH FORMS
//   $('#insertSearchFormhere').append(
//       '<div class="row">
//           <div class="col">
//               <form class="form-horizontal" id="formWrapper">
//                   <div class="row">
//                       <div class="form-group">
//                           <div class="row">
//                               <h2>' + Search By State + '</h2>
//                               <!-- SEARCH BY STATE TITLE -->
//                           </div>
//                           <div class="row">
//                               <div class="col-sm-6">
//                                   <select id="browseStateOption" class="form-control">
//                                       <option value="AL">Alabama</option>
//                                       <option value="AK">Alaska</option>
//                                       <option value="AZ">Arizona</option>
//                                       <option value="AR">Arkansas</option>
//                                       <option value="CA">California</option>
//                                       <option value="CO">Colorado</option>
//                                       <option value="CT">Connecticut</option>
//                                       <option value="DE">Delaware</option>
//                                       <option value="DC">District Of Columbia</option>
//                                       <option value="FL">Florida</option>
//                                       <option value="GA">Georgia</option>
//                                       <option value="HI">Hawaii</option>
//                                       <option value="ID">Idaho</option>
//                                       <option value="IL">Illinois</option>
//                                       <option value="IN">Indiana</option>
//                                       <option value="IA">Iowa</option>
//                                       <option value="KS">Kansas</option>
//                                       <option value="KY">Kentucky</option>
//                                       <option value="LA">Louisiana</option>
//                                       <option value="ME">Maine</option>
//                                       <option value="MD">Maryland</option>
//                                       <option value="MA">Massachusetts</option>
//                                       <option value="MI">Michigan</option>
//                                       <option value="MN">Minnesota</option>
//                                       <option value="MS">Mississippi</option>
//                                       <option value="MO">Missouri</option>
//                                       <option value="MT">Montana</option>
//                                       <option value="NE">Nebraska</option>
//                                       <option value="NV">Nevada</option>
//                                       <option value="NH">New Hampshire</option>
//                                       <option value="NJ">New Jersey</option>
//                                       <option value="NM">New Mexico</option>
//                                       <option value="NY">New York</option>
//                                       <option value="NC">North Carolina</option>
//                                       <option value="ND">North Dakota</option>
//                                       <option value="OH">Ohio</option>
//                                       <option value="OK">Oklahoma</option>
//                                       <option value="OR">Oregon</option>
//                                       <option value="PA">Pennsylvania</option>
//                                       <option value="RI">Rhode Island</option>
//                                       <option value="SC">South Carolina</option>
//                                       <option value="SD">South Dakota</option>
//                                       <option value="TN">Tennessee</option>
//                                       <option value="TX">Texas</option>
//                                       <option value="UT">Utah</option>
//                                       <option value="VT">Vermont</option>
//                                       <option value="VA">Virginia</option>
//                                       <option value="WA">Washington</option>
//                                       <option value="WV">West Virginia</option>
//                                       <option value="WI">Wisconsin</option>
//                                       <option value="WY">Wyoming</option>
//                                   </select>
//                               </div>
//                               <div class="col-sm-6">
//                                   <button type="submit" id="browseStateBtn" class="btn btn-primary btn-block">Search</button>
//                               </div>
//                           </div>
//                       </div>
//                       <div class="form-group">
//                           <div class="row">
//                               <h2>' + Browse Parks + '</h2>
//                           </div>
//                           <div class="row">
//                               <div class="col-sm-6">
//                                   <select id="browseParkOption" class="form-control">
//                                       <option value="acad">Acadia</option>
//                                       <option value="npsa">American Samoa</option>
//                                       <option value="arch">Arches</option>
//                                       <option value="badl">Badlands</option>
//                                       <option value="bibe">Big Bend</option>
//                                       <option value="bisc">Biscayne</option>
//                                       <option value="blca">Black Canyon of the Gunnison</option>
//                                       <option value="brca">Bryce Canyon</option>
//                                       <option value="cany">Canyonlands</option>
//                                       <option value="care">Capitol Reef</option>
//                                       <option value="cave">Carlsbad Caverns *</option>
//                                       <option value="chis">Channel Islands</option>
//                                       <option value="cong">Congaree</option>
//                                       <option value="crla">Crater Lake</option>
//                                       <option value="cuva">Cuyahoga Valley</option>
//                                       <option value="deva">Death Valley</option>
//                                       <option value="dena">Denali</option>
//                                       <option value="drto">Dry Tortugas</option>
//                                       <option value="ever">Everglades</option>
//                                       <option value="gaar">Gates of the Arctic</option>
//                                       <option value="jeff">Gateway Arch</option>
//                                       <option value="glac">Glacier</option>
//                                       <option value="glba">Glacier Bay</option>
//                                       <option value="grca">Grand Canyon *</option>
//                                       <option value="grta">Grand Teton</option>
//                                       <option value="grba">Great Basin</option>
//                                       <option value="grsa">Great Sand Dunes</option>
//                                       <option value="grsm">Great Smoky Mountains</option>
//                                       <option value="gumo">Guadalupe Mountains</option>
//                                       <option value="hale">Haleakalā</option>
//                                       <option value="havo">Hawaiʻi Volcanoes</option>
//                                       <option value="hosp">Hot Springs</option>
//                                       <option value="isro">Isle Royale</option>
//                                       <option value="jotr">Joshua Tree</option>
//                                       <option value="katm">Katmai</option>
//                                       <option value="kefj">Kenai Fjords</option>
//                                       <option value="seki">Kings Canyon</option>
//                                       <option value="kova">Kobuk Valley</option>
//                                       <option value="lacl">Lake Clark</option>
//                                       <option value="lavo">Lassen Volcanic</option>
//                                       <option value="maca">Mammoth Cave</option>
//                                       <option value="meve">Mesa Verde*</option>
//                                       <option value="mora">Mount Rainier</option>
//                                       <option value="noca">North Cascades</option>
//                                       <option value="olym">Olympic</option>
//                                       <option value="pefo">Petrified Forest</option>
//                                       <option value="pinn">Pinnacles</option>
//                                       <option value="redw">Redwood *</option>
//                                       <option value="romo">Rocky Mountain</option>
//                                       <option value="sagu">Saguaro</option>
//                                       <option value="seki">Sequoia</option>
//                                       <option value="shen">Shenandoah</option>
//                                       <option value="thro">Theodore Roosevelt</option>
//                                       <option value="viis">Virgin Islands</option>
//                                       <option value="voya">Voyageurs</option>
//                                       <option value="wica">Wind Cave</option>
//                                       <option value="wrst">Wrangell–St. Elias *</option>
//                                       <option value="yell">Yellowstone</option>
//                                       <option value="yose">Yosemite *</option>
//                                       <option value="zion">Zion</option>
//                                   </select>
//                               </div>
//                               <div class="col-sm-6">
//                                   <button type="submit" id="browseParkBtn" class="btn btn-primary btn-block">' + Search + '</button>
//                               </div>
//                           </div>
//                       </div>

                      
//                       <div class="form-group">
//                           <div class="row">
//                               <h2>' + Pick A Random Park + '</h2>
//                           </div>
//                           <div class="row">
//                               <div class="col-sm-12">
//                                   <button type="submit" id="randomParkBtn" class="btn btn-primary btn-block">' + Pick A Random Park + '</button>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </form>
//           </div>
//       </div>
//   );
// });



// PACKERY.JS JAVASCRIPT (packery.pkgd.js & full jquery scripts needed to run)
// ========================================================================
// initialize Packery
  var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    // columnWidth helps with drop positioning
    columnWidth: 50,
    gutter: '.gutter-sizer',
    vertical: true,
    resize: false,
  });
// make all items draggable
  var $items = $grid.find('.grid-item').draggable();
  // bind drag events to Packery
  $grid.packery( 'bindUIDraggableEvents', $items );

  // var $container = $('#container').packery({
  //   itemSelector: '.grid-item',
  //   columnWidth: $container.find('.grid-sizer')[0]
  // });

  // // $('.grid').packery({
  // //   // options
  // //   itemSelector: '.grid-item',
  // //   gutter: 10
  // // });


// FACEBOOK SDK JAVASCRIPT
// ========================================================================
{/* <div id="fb-root"></div> */}
(
  function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=163997500904054&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



// TWITTER 
// ========================================================================
$("#shareBtn").on("click", function (event) {
  event.preventDefault();
  // $('#dynamicContent').empty();
  // $('#insertGooglehere').empty();
  console.log("twitter");
  $('#insertTwitterHere').append('<a href="https://twitter.com/intent/tweet?screen_name=NatlParkService&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-text="Check out the fun things we are doing with the help of NPS Connect! #DiscoverNationalParks #NatureUpClose" data-lang="en" data-show-count="false">Tweet to @NatlParkService</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>')
});


