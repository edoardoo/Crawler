var Crawler = require("crawler").Crawler;

var c = new Crawler({
"maxConnections":10,

// This will be called for each crawled page
"callback":function(error,result,$) {

    // $ is a jQuery instance scoped to the server-side DOM of the page
    $(".list li").each(function(){
    		var prezzo = $(this).find(".price").text().replace(/\s+/g, "");
    		var address = $(this).find(".th_box a").attr("href");
    	    console.log("prezzo: " + prezzo +" indirizzo: "+ address);

    });
   


}
});

// Queue just one URL, with default callback
c.queue("http://www.subito.it/annunci-toscana/vendita/moto-e-scooter/?bb=000040&bm=000697&me=9");
