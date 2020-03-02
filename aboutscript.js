var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
  // console.log(inputReady);
});

$('.four-oh-four-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.404-input')).val().toLowerCase();
  var href;

	 if (val === 'kittens'){
    showKittens();
  }
 else if (val === 'whoami'){
    showwhoami();
  }
  else if (val === 'whoareyou'){
    showwhoareyou();
  } 
  else if (val === 'more'){
    showredirection();
  }
  else if (val === 'help'){
    showhelp();
  }
  else {
    resetForm();
  }
});

function showhelp(){
	$('.terminal').append("<div class='kittens'>"+"<p class='promptcont'>Try commands - whoami , whoareyou , kittens</p></div>");
	var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		message="."
		$('.new-output').removeClass('new-output');
		input.val('');
		$('.terminal').append('<p class="prompt output new-output"></p>');
	  
		$('.new-output').velocity(
		  'scroll'
		), {duration: 100}
}


function showwhoareyou(){
	$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>x64mayhem [ADM1N]</p>"+"</div>");
	var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		message="."
		$('.new-output').removeClass('new-output');
		input.val('');
		$('.terminal').append('<p class="prompt output new-output"></p>');
	  
		$('.new-output').velocity(
		  'scroll'
		), {duration: 100}
}

function showwhoami(){
	$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>FUTURE HACKER, SECURITY RESEARCHER, OR TO-BE WINNER OF CYQUEST 2020. YOU ARE ANYTHING YOU SET YOUR MIND TO BE !</p>"+"</div>");
	var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		message="."
		$('.new-output').removeClass('new-output');
		input.val('');
		$('.terminal').append('<p class="prompt output new-output"></p>');
	  
		$('.new-output').velocity(
		  'scroll'
		), {duration: 100}
}
function showredirection(){
	$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>For more, visit : </p>"+"</div>");
	var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		message="."
		$('.new-output').removeClass('new-output');
		input.val('');
		$('.terminal').append('<p class="prompt output new-output"></p>');
	  
		$('.new-output').velocity(
		  'scroll'
		), {duration: 100}
}



function resetForm(withKittens){
  var message = "ERROR : Command not found."
  var input = $('.404-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "Well, here are the CATS you asked for. <3"
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}



	function showKittens(){
		$('.terminal').append("<div class='kittens'>"+
		"<p class='prompt'> ______    _______  ___   __    _    ___   _  ___   _______  _______  _______  __    _  _______      </p>" +
		"<p class='prompt'>|    _ |  |   _   ||   | |  |  | |  |   | | ||   | |       ||       ||       ||  |  | ||       |     </p>" +
		"<p class='prompt'>|   | ||  |  |_|  ||   | |   |_| |  |   |_| ||   | |_     _||_     _||    ___||   |_| ||  _____|     </p>" +
		"<p class='prompt'>|   |_||_ |       ||   | |       |  |      _||   |   |   |    |   |  |   |___ |       || |_____      </p>" +
		"<p class='prompt'>|    __  ||       ||   | |  _    |  |     |_ |   |   |   |    |   |  |    ___||  _    ||_____  | ___ </p>" + 
		"<p class='prompt'>|   |  | ||   _   ||   | | | |   |  |    _  ||   |   |   |    |   |  |   |___ | | |   | _____| ||   |</p>" + 
		"<p class='prompt'>|___|  |_||__| |__||___| |_|  |__|  |___| |_||___|   |___|    |___|  |_______||_|  |__||_______||___|</p>" + 
								 "<p class='prompt'>                                                              </p></div>");

		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		setTimeout(function(){
			var gif;

			$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function(result){
				gif = result.data.image_url;
				$('.terminal').append('<img class="kitten-gif" src="' + gif + '"">');
				resetForm(true);
			});
		}, (lines.length * 100) + 1000);
	}

	function textEffect(line){
		var alpha = [';', '.', ',', ':', ';', '~', '`'];
		var animationSpeed = 10;
		var index = 0;
		var string = line.text();
		var splitString = string.split("");
		var copyString = splitString.slice(0);

		var emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};