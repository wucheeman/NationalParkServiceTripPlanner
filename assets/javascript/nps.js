$("#submitBtn").on("click", function (event) {
  console.log("hi")
  // event.preventDefault();
});

    var parkCodes = [
    acad,npsa,arch,badl,bibe,bisc,blca,brca,cany,care,cave,chis,cong,crla,cuva,deva,dena,drto,ever,gaar,jeff,glac,glba,grca,grta,grba,grsa,grsm,gumo,hale,havo,hosp,isro,jotr,katm,kefj,seki,kova,lacl,lavo,maca,meve,mora,noca,olym,pefo,pinn,redw,romo,sagu,shen,thro,viis,voya,wica,wrst,yell,yose,zion
]
    var parks = [ "Acadia",
              "American Samoa",
              Arches,
              Badlands,
              Big Bend,
              Biscayne,
              Black Canyon of the Gunnison,
              Bryce Canyon,
              Canyonlands,
              Capitol Reef, 
              Carlsbad Caverns,
              Channel Islands,
              Congaree,
              Crater Lake,
              Cuyahoga Valley,
              Death Valley,
              Denali,
              Dry Tortugas,
              Everglades,
              Gates of the Arctic,
              Gateway Arch,
              Glacier,
              Glacier Bay,
              Grand Canyon,
              Grand Teton,
              Great Basin,
              Great Sand Dunes,
              Great Smoky Mountains,
              <Guadalupe Mountains,
              Haleakalā,
              Hawaiʻi Volcanoes,
              Hot Springs,
              <Isle Royale,
              Joshua Tree,
              Katmai,
              Kenai Fjords,
              Kings Canyon,
              Kobuk Valley,
              Lake Clark,
              Lassen Volcanic,
              Mammoth Cave,
              Mesa Verde,
              Mount Rainier
              North Cascades
              Olympic,
              Petrified Forest,
              Pinnacles,
              Redwood,
              Rocky Mountain,
              Saguaro,
              Sequoia,
              Shenandoah,
              Theodore Roosevelt,
              Virgin Islands,
              Voyageurs,
              Wind Cave,
              Wrangell–St. Elias,
              Yellowstone,
              Yosemite,
              Zion,
    ]

    
            var randomSelect=Math.floor(Math.random() * 61);
            var selectedCode=parkCodes[randomNumber]
            var queryQRL = "https://developer.nps.gov/api/v1/parks?parkCode" + randomNumber + "&api_key=oc4HHNynCW6opSic49NXu4XgDx2poMUu";
        console.log(queryQRL);
        


        $.ajax({
            url: queryQRL,
            method: "GET"
        }).done(function (response) {
            var random = $('randomSelect')
        }
