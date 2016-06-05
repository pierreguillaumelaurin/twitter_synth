$(document).ready(function() {
  /***************************************/
  /************* Main "Loop" ***/
  /***************************************/
  console.log('doc ready!');

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
    return words;
    setSpeakButtonToTweet();
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

    $("#hashtag-form").addClass('hidden');
    $("#speak-btn").removeClass('hidden');
    $("#redo-btn").removeClass('hidden');
    $("#speak-btn").attr("onclick","responsiveVoice.speak('" + arg + "');");
  }


  /************* Synth related functions *************/

  function note(audio, frequency) {
    return function() {
      var duration = 1;
      var sineWave = createSineWave(audio, duration);
      chain([sineWave,
             createAmplifier(audio, 0.2, duration),
             audio.destination]);
      sineWave.connect(audio.destination);
    }
  };

  function createAmplifier(audio, startValue, duration) {
  var amplifier = audio.createGain();
  rampDown(audio, amplifier.gain, startValue, duration);
  return amplifier;
  };

  function chain(items) {
    for (var i = 0; i < items.length - 1; i++) {
      items[i].connect(items[i + 1]);
    }
  };

  function createSineWave(audio, duration) {
  var oscillator = audio.createOscillator();
  oscillator.type = "sine";

  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + duration);

  return oscillator;
};


});


