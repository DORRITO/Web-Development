$(document).ready(function(){
    
    //pressing enter search
    $(".wikiSearch").keypress(function(e){
        if(e.which === 13){
            
            //wiki= search term used by user & url= api call
            var wikiSearch = $(".wikiSearch").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiSearch + "&callback=?";
            
            //ajax call
            $.getJSON({
                type: "GET",
                url: url,
                datatype: "json",
                success: function(data){
                    
                    $('.list').html('');
                    for(var i = 0; i < data[1].length; i++){
                        $('.list').append("<li class=\"col-xs-10 col-xs-offset-1\"><a target=_blank href= " + data[3][i] + ">"+ data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                    }
                },
                error: function(error){
                    alert("ajax didnt work");
                }
            });
            $(".wikiSearch").val("");
        }
    });
    
    //opens a random wiki page
    $(".randomLink").click(function(){
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    })
})