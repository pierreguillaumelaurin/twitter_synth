$(document).ready(function() {
	console.log('doc ready!');

	$('#new-tweet').click(function() {
    
    var search_term = {
      q: 'bowery'
    };
    console.dir(search_term);
    search(search_term);
	});
})

function search(search_term) {
	console.log('searching for ');
	console.dir(search_term);
  
  $.ajax({
	url: '//api.twitter.com/1.1/search/tweets.json?q=%' + $.param(search_term),
	dataType: 'jsonp',
	success: function(data) {
    console.dir(data);
    console.log(data);
	}

});
}