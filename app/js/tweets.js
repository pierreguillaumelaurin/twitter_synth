$(document).ready(function() {
  /***************************************/
  /************* Main "Loop" ***/
  /***************************************/
  console.log('doc ready!');
  
  
	var tweet;
  var currentWordIndex = 0;
  
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
    tweet = $('#tweet').text();
    tweet = tweet.split(" ");

    console.log(tweet);
    updateToSecondView();

  }

  function reset () {

    $("#hashtag-form").removeClass('hidden');
    $("#hashtag-form").val('');

    $("#speak-btn").addClass('hidden');
    $("#speak-btn").empty();

    $("#redo-btn").addClass('hidden');
    $("#tweet").empty();
  }

  function updateToSecondView () {
    $("#hashtag-form").addClass('hidden');
    $("#speak-btn").removeClass('hidden');
    $("#redo-btn").removeClass('hidden');

    updateKeyboard();
  }

  function updateKeyboard () {
    var keys = ['D','F','G','H','J', 'K', 'L'];
    var pitches = ['0', '0.4', '0.8', '1.1', '1.4', '1.7', '2'];

    for(var i = 0; i <= keys.length; i++) {
      $('#' + keys[i]).click({thepitch: pitches[i]}, addSoundToKeyboard);
      $('#' + keys[i]).addClass('btn synth-key');
      $('#' + keys[i]).keypress(function(e) {
        if(e.which == 68) {addSoundToKeyboard}
      });
    }

  }

  function addSoundToKeyboard(event) {
        var content = tweet[currentWordIndex]+Array(10).join(tweet[currentWordIndex].slice(-2));
        var speech = responsiveVoice.speak(content,"UK English Male", {pitch: event.data.thepitch});
        console.log(currentWordIndex +"|" + tweet.length);
        incrementCurrentWordIndex();
      }

  function incrementCurrentWordIndex() {
    console.log(tweet[tweet.length-1]);
    if (tweet[currentWordIndex] == tweet[tweet.length-1]) {
      currentWordIndex = 0;
    }
    else {
    currentWordIndex += 1;
    }
  }

  function resetKeyboard () {
    var keys = ['D','F','G','H','J', 'K', 'L'];
    var pitches = ['0', '0.4', '0.8', '1.1', '1.4', '1.7', '2'];

    for(var i = 0; i <= keys.length; i++) {
      $('#' + keys[i]).unbind();
    }
  }


});


