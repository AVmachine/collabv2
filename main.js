$("#search_button").click(function(){
	var search_words = $("#search_bar").val();
	var base = $("iframe").attr("src");
	$.getJSON( "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search_words + "&key=AIzaSyATUPsfY3MunXxd2f8nk2x0hFiJuq_bUKg" , function(obj){
        for (var i = 0; i < obj.items.length; i++){
        	if (obj.items[i].id.kind == "youtube#video"){
        		var video = obj.items[i].id.videoId;
        		var name = obj.items[i].snippet.title
        		var link = document.createElement("a");
        		$(link).attr("data-link", base + video);
        		$(link).text(name);
        		$("#search_results").append(link);
        	}
        }
        $("iframe").attr("src", base + video);
        console.log(obj);
        console.log(video);
    });
    $(document).on("click", "a", function() {
    	$("iframe").attr("src", $(this).attr("data-link"));
    })
    return false;
});