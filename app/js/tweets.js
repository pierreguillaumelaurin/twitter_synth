$(document).ready(function() {
/************** High-Level Logic ***************/
  console.log('doc ready!');

	var tweet;
  
  /*** API call to twitter with twittie extension ***/
  $('#hashtag-form').keypress(function(e) {
    if(e.which == 13) {
        getTweet();
      }
    });

  $('#redo-btn').click(reset);

  /*** declare tweet as variable ***/
  function getElizasAnswer () {
	  tweet = $('#tweet').text();
	  console.log(tweet);

	  var eliza = new ElizaBot(true);
    var initial = eliza.getInitial();
    var reply= eliza.transform(tweet);
    reply = replaceStr(reply);
    console.log(reply);
    
    updateToSecondView(reply);


  }

  function getTweet() {

    var hashtag = $('#hashtag-form').val();
    
      $('#tweet').twittie({
        'hashtag': hashtag,
        'count': 1,
        'hideReplies': true,
        'template': '{{tweet}}',
        'apiPath': 'http://localhost/~pierre-guillaume/coveo_projet/app/Tweetie-Master/api/tweet.php'
        }, getElizasAnswer);
  }

  function replaceStr (str) {
			  str = str.replace(/'/ , ' ');
			  console.log("replaceStr is on");
			  return str;
			};

  function reset () {
    $("#hashtag-form").removeClass('hidden');
    $("#hashtag-form").val('');
    $("#speak-btn").addClass('hidden');
    $("#redo-btn").addClass('hidden');
    $("#tweet").empty();
    $("#speak-btn").attr("onclick","responsiveVoice.speak('" + replya + "');");
  }

  function updateToSecondView (arg) {
    $("#hashtag-form").addClass('hidden');
    $("#speak-btn").removeClass('hidden');
    $("#redo-btn").removeClass('hidden');
    $("#speak-btn").attr("onclick","responsiveVoice.speak('" + arg + "');");
  }

});


