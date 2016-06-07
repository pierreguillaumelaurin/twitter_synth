$(document).ready(function() {
  /***************************************/
  /************* Main "Loop" ***/
  /***************************************/
  console.log('doc ready!');
  
  //test
  var saw = new Wad({source : 'sawtooth'});
  saw.play();
  saw.stop();

	var tweet;
  
  /*** API call to twitter with twittie extension ***/
  $('#hashtag-form').keypress(function(e) {

    if(e.which == 13) {
        getTweet();
      }
    });

  $('#redo-btn').click(reset);

  /***************************************/
  /************* Lower level functions ***/
  /***************************************/

  function getTweet() {

    var hashtag = $('#hashtag-form').val();
    
      $('#tweet').twittie({
        'hashtag': hashtag,
        'count': 1,
        'hideReplies': true,
        'template': '{{tweet}}',
        'apiPath': 'http://localhost/~pierre-guillaume/coveo_projet/app/Tweetie-Master/api/tweet.php'
        }, getArrayOfWords);
  }

  function getArrayOfWords () {

    var words = []
    tweet = $('#tweet').text();
    words = tweet.split(" ");

    console.log(words);
    setSpeakButtonToTweet();

    return words;
  }

  function setSpeakButtonToTweet () {

    tweet = $('#tweet').text();
    
    updateToSecondView(tweet);


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
    $("#speak-btn").empty();

    $("#redo-btn").addClass('hidden');
    $("#tweet").empty();
  }

  function updateToSecondView (arg) {
    console.log('update is on');
    $("#hashtag-form").addClass('hidden');
    $("#speak-btn").removeClass('hidden');
    $("#redo-btn").removeClass('hidden');

    updateKeyboard(arg);
  }

  function updateKeyboard (arg) {

    var keys = ['#D','#F','#G','#H','#J', '#K', '#L'];
    var pitches = ['0', '0.4', '0.8', '1.1', '1.4', '1.7', '2'];

    for(var i = 0; i <= keys.length; i++) {
      console.log(pitches[i]);
      $(keys[i]).click({thepitch: pitches[i]}, function (event) {
        console.log(event.data.thepitch);
        var speech = responsiveVoice.speak(arg,"UK English Male", {pitch: event.data.thepitch});
      })
    }
  }



});


