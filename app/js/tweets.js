$(document).ready(function() {

	var test_tweet = "Mark Zuckerberg invest 1 billion dollars into Kanye West ideas after realizing he is the greatest living artist and greatest artist of all time.";
	test_tweet = "who is arya stark?";

  /*** eliza app ***/

	console.log('doc ready!');
	var eliza = new ElizaBot(true);
  var initial = eliza.getInitial();
  var reply= eliza.transform(test_tweet);
  
  $('#eliza').html(reply);
  console.log('Elisa: '+ initial + reply);

  /*** conversion of tweet to voice ***/
  var msg = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(msg);
  
  /*** API call to twitter with twittie extension ***/

  $('#tweet').twittie({
  	'hashtag': 'justin',
  	'count': 5,
  	'apiPath': '../Tweetie-Master/api/tweet.php'
    }, function() {
    	alert('loaded!');
    });
  });


/*
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
*/