$(document).ready(function() {

  console.log('doc ready!');

	var tweet;
  
  /*** API call to twitter with twittie extension ***/
  $(document).keypress(function(e) {
    if(e.which == 13) {
        var hashtag = $('#hashtag-form').val();
    }

	  

	  $('#tweet').twittie({
	  	'hashtag': hashtag,
	  	'count': 1,
	  	'hideReplies': true,
	  	'template': '{{tweet}}',
	  	'apiPath': 'http://localhost/~pierre-guillaume/coveo_projet/app/Tweetie-Master/api/tweet.php'
	    }, getElizasAnswer);
    });

  /*** declare tweet as variable ***/
  function getElizasAnswer () {
	  tweet = $('#tweet').text();
	  console.log(tweet);

	  var eliza = new ElizaBot(true);
    var initial = eliza.getInitial();
    var reply= eliza.transform(tweet);
    

    var replya = replaceStr(reply);
    /***********reply************/
    
    /****************************/
    console.log(reply);
    
    $("#speak-btn").attr("onclick","responsiveVoice.speak('" + replya + "');");


  }

  function replaceStr (str) {
			  str = str.replace(/'/ , ' ');
			  console.log("replaceStr is on");
			  return str;
			};

  /*** eliza app ***/

	
	
 


  });


