$("#submitBtn").on("click", function (event) {
  console.log("hi")
  // event.preventDefault();
});

    var parkCodes = [
    acad,npsa,arch,badl,bibe,bisc,blca,brca,cany,care,cave,chis,cong,crla,cuva,deva,dena,drto,ever,gaar,jeff,glac,glba,grca,grta,grba,grsa,grsm,gumo,hale,havo,hosp,isro,jotr,katm,kefj,seki,kova,lacl,lavo,maca,meve,mora,noca,olym,pefo,pinn,redw,romo,sagu,shen,thro,viis,voya,wica,wrst,yell,yose,zion
]
            var randomSelect=Math.floor(Math.random() * 61);
 var queryQRL = "https://api.giphy.com/v1/gifs/search?parkCodes" + randomSelect + "&api_key=oc4HHNynCW6opSic49NXu4XgDx2poMUu";
        console.log(queryQRL);


        $.ajax({
            url: queryQRL,
            method: "GET"
        }).done(function (response) {
            var random = $('randomSelect')
        }
