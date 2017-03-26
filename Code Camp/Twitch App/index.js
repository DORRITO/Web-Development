$(document).ready(function(){

    ////////////////Get online or offline status//////////////
    $.ajax({
        type: "GET",
        url: "https://api.twitch.tv/kraken/streams/drbagginz",
        headers: { "Client-ID": "d50pyywgfeehf85r0bccpdfnagid9c" },
        success: function(data){
            //shows if stream is online or offline
            if (data.stream === null){
                $(".status").html("Drbagginz is offline");
            } else {
                $(".status").html("DrBagginz is " + "<a href=www.twitch.tv/drbagginz target='_blank'>online </a>");
            }
        }
    });///////////////////////////////////////////////////////
    
    ///////////////////////////ajax call through channels///////////////////////////////////////////
    $.ajax({
        type: "GET",
        url: "https://api.twitch.tv/kraken/users/drbagginz/follows/channels/",
        headers: { "Client-ID": "d50pyywgfeehf85r0bccpdfnagid9c" },
        
        //loop through names, logos, and channel statuses
        success: function(data){     
            for(var i = 0; i < data.follows.length; i++){
                var displayName = data.follows[i].channel.display_name;
                var logo = data.follows[i].channel.logo;
                var status = data.follows[i].channel.status;
                var followUrl = data.follows[i].channel.url;
                //sets default logo if there is none
                if(logo === null){
                    logo = "https://static-cdn.jtvnw.net/jtv_user_pictures/drbagginz-profile_image-90972552197bb71d-300x300.jpeg";
                }               
                $(".followers").prepend("<div class='row follower'>" + "<div class='col-md-4'>" 
                                        + "<img src='" + logo + "'>" 
                                        + "</div>" + "<div class='col-md-4'>" + displayName + "</div>"
                                        + "<div class='col-md-4'>" + status + "</div> </div>"); 
            }
        },
        error: function(dataError){
            console.log(dataError);
        }           
    });//////////////////////////////////////////////////////////////////////////////////////////////  
})