
$('#randomParkBtn').click(function(){
   // event.preventDefault();
  var parkCodes = [
    acad,npsa,arch,badl,bibe,bisc,blca,brca,cany,care,cave,chis,cong,crla,cuva,deva,dena,drto,ever,gaar,jeff,glac,glba,grca,grta,grba,grsa,grsm,gumo,hale,havo,hosp,isro,jotr,katm,kefj,seki,kova,lacl,lavo,maca,meve,mora,noca,olym,pefo,pinn,redw,romo,sagu,shen,thro,viis,voya,wica,wrst,yell,yose,zion,
  ]
  var randomSelect=Math.floor(Math.random() * 61);
  var queryQRL = "https://api.giphy.com/v1/gifs/search?parkCodes" + randomSelect + "&api_key=oc4HHNynCW6opSic49NXu4XgDx2poMUu";
  console.log(queryQRL);
  $.ajax({
    url: queryQRL,
    method: "GET"
  }).done(function (response) {
    var random = $('randomSelect');
  });
});







randomParkObj = {
  parkOpt1: "acad", parkOpt2: "npsa", parkOpt3: "arch", parkOpt4: "badl", parkOpt5: "bibe", parkOpt6: "bisc", parkOpt7: "blca", parkOpt8: "brca", parkOpt9: "cany", parkOpt10: "care", parkOpt11: "cave", parkOpt12: "chis", parkOpt13: "cong", parkOpt14: "crla", parkOpt15: "cuva", parkOpt16: "deva", parkOpt17: "dena", parkOpt18: "drto", parkOpt19: "ever", parkOpt20: "gaar", parkOpt21: "jeff", parkOpt22: "glac", parkOpt23: "glba", parkOpt24: "grca", parkOpt25: "grta", parkOpt26: "grba", parkOpt27: "grsa", parkOpt28: "grsm", parkOpt29: "gumo", parkOpt30: "hale", parkOpt31: "havo", parkOpt32: "hosp", parkOpt33: "isro", parkOpt34: "jotr", parkOpt35: "katm", parkOpt36: "kefj", parkOpt37: "seki", parkOpt38: "kova", parkOpt39: "lacl", parkOpt40: "lavo",  parkOpt41: "maca", parkOpt42: "meve", parkOpt43: "mora", parkOpt44: "noca", parkOpt45: "olym", parkOpt46: "pefo", parkOpt47: "pinn", parkOpt48: "redw", parkOpt49: "romo", parkOpt50: "sagu", parkOpt51: "shen", parkOpt52: "thro", parkOpt53: "viis", parkOpt54: "voya", parkOpt55: "wica", parkOpt56: "wrst", parkOpt57: "yell", parkOpt58: "yose", parkOpt59: "zion", parkOpt60: "missing",
}

randomParkArray = [
  parkOpt1, parkOpt2, parkOpt3, parkOpt4, parkOpt5, parkOpt6, parkOpt7, parkOpt8, parkOpt9, parkOpt10, parkOpt11, parkOpt12, parkOpt13, parkOpt14, parkOpt15, parkOpt16, parkOpt17, parkOpt18, parkOpt19, parkOpt20, parkOpt21, parkOpt22, parkOpt23, parkOpt24, parkOpt25, parkOpt26, parkOpt27, parkOpt28, parkOpt29, parkOpt30, parkOpt31, parkOpt32, parkOpt33, parkOpt34, parkOpt35, parkOpt36, parkOpt37, parkOpt38, parkOpt39, parkOpt40, parkOpt41, parkOpt42, parkOpt43, parkOpt44, parkOpt45, parkOpt46, parkOpt47, parkOpt48, parkOpt49, parkOpt50, parkOpt51, parkOpt52, parkOpt53, parkOpt54, parkOpt55, parkOpt56, parkOpt57, parkOpt58, parkOpt59, parkOpt60
]