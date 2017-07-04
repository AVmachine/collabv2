$("#search_button").click(function(){
	var search_words = $("#search_bar").val();
	$.getJSON( "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search_words + "&key=AIzaSyATUPsfY3MunXxd2f8nk2x0hFiJuq_bUKg" , function(obj){
        var base = $("iframe").attr("src");
        var video = obj.items[0].id.videoId;
        console.log(video);
        $("iframe").attr("src", base + video);
    });
    return false;
});