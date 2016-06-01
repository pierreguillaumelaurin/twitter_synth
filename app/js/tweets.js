$(document).ready(function() {

  console.log('doc ready!');

	var tweet;
  
  /*** API call to twitter with twittie extension ***/

  $('#tweet').twittie({
  	'hashtag': 'short',
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

    /***********reply************/
    /*reply = 'Hello world';
    /****************************/
    console.log(reply);
    
    $("#speak-btn").attr("onclick","responsiveVoice.speak('"+ reply+ "');");

    function replaceStr (str) {
			  str.replace("'","");
			  console.log("replaceStr is on");
			  return str;
			};

		

  }

  /*** eliza app ***/

	
	
 


  });


