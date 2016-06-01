$(document).ready(function() {

  console.log('doc ready!');

	var tweet;
  
  /*** API call to twitter with twittie extension ***/

  $('#tweet').twittie({
  	'hashtag': 'kanyewest',
  	'count': 1,
  	'hideReplies': true,
  	'template': '{{tweet}}',
  	'apiPath': 'http://localhost/~pierre-guillaume/coveo_projet/app/Tweetie-Master/api/tweet.php'
    }, getElizasAnswer);

  /*** declare tweet as variable ***/
  function getElizasAnswer () {
	  tweet = $('#tweet').text();
	  console.log(tweet);

	  var eliza = new ElizaBot(true);
    var initial = eliza.getInitial();
    var reply= eliza.transform(tweet);

    console.log(reply);
    
    $("#speak-btn").attr("onclick","responsiveVoice.speak('"+ reply+ "');");

  }

  /*** eliza app ***/

	
	
 


  });


