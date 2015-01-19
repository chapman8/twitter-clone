$(document).ready(function(){

	$('#tweet-controls').hide();


//Enlarge text box
	$('.tweet-compose').on('focus', function(){
		$(this).css('height','5em');
		$('#tweet-controls').show();
	});

//Char count decresase and turn red at < 10 and deactivate submit at< 0.
	$('.tweet-compose').keyup(function(){
		var text140 = $('.tweet-compose').val()
		var textLeft = 140 - text140.length;
		$('#char-count').html(textLeft);
		  if (textLeft <= 10) {
		  	$('#char-count').css('color', 'red');
		  }
		  if (textLeft > 10) {
		  	$('#char-count').css('color', 'black');
		  }
		  if (textLeft < 0) {
		  	$('#tweet-submit').prop('disabled', true);
		  }		
		  if (textLeft >= 0) {
		  	$('#tweet-submit').prop('disabled', false);
		  }
	});


//Post new tweet
	$('#tweet-submit').on('click', function(){
		var tweet = $('.tweet-compose').val();
		var userName = $('#profile-summary p').text() + ' ';
		var pic = $('#profile-summary .avatar').attr('src');
		$('#stream').prepend(
			'<div class="tweet"><div class="content"><img class="avatar" src="' + pic + '" /><strong class="fullname">' + userName + '</strong><span class="username">' + userName + '</span><p class="tweet-text">' + tweet + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div>'
		);
		
	});

	/* Or:

	var editNewTweet - function(element) {
		var tweet = $('.tweet-compose').val();
		var userName = $('#profile-summary p').text() + ' ';
		var pic = $('#profile-summary .avatar').attr('src');
		$(element).find(',fullname').text(userName);
	}

	var newTweet = $('.tweet').first().clone(true); //Create a clone of the latest tweet. 
	$('#stream').prepend(newTweet); //insert a clone of the first tweet
	editNewTweet(newTweet);

	$('#tweet-content > /tweet-compse').val("");
	$('#tweet-content > .tweet-compse').trigger('blur');
	*/


	$('.tweet-actions').hide();
	$('.stats').hide();
	$('.reply').hide();

	$('.tweet').on('mouseenter', function (){
		$('.tweet-actions', this).show();
	});

	$('.tweet').on('mouseleave', function (){
		$('.tweet-actions', this).hide();
	});

	$('.stats').hide();

	$('.tweet').on('click', function(){
		$('.stats, .reply', this).toggle();
	});






})