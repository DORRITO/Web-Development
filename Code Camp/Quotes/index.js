$(document).ready(function(){
    
    //Pull up a random quote on button click.
    $(".click").on("click", function(){
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + rNum(), function(a) {
            $(".quote").html(a[0].content + "<p>— " + a[0].title + "</p>")
        })       
    });
});

//function to pull a random quote
function rNum(){
    return Math.floor((Math.random() * 5000) + 1);
};