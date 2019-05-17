
function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + encodeURI(cvalue) + ";path=/";
}

function deleteCookie( name ) {
	var string = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
	document.cookie = string;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return decodeURI(c.substring(name.length, c.length));
	  }
	}
	return "";
}  

function redirectURL (event){
	event.preventDefault();
	// Trigger the button element with a click
	if($('#id4me-checkbox').prop('checked')){
		setCookie("id4me.user", $('#id4me-input').val());
	}
	// spinner animation
	$('#id4me-input-signin').html("<div class='loader'></div>");
	// disable button and enter key
	$('#id4me-input').off("keydown");
	$('#id4me-input-signin').off("click");
	$('#id4me-input-signin').css("background-color", "#999");
	var url = $('#id4me-button-anchor').attr("data-link") + "&id4me=" + encodeURI($('#id4me-input').val());
	location.href = url;
}

$(function() {
	$('#id4me-input').keydown(function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
		redirectURL(event);
	  }
	});

	$('#id4me-input-signin').click(function(event){
		redirectURL (event);
	});
});


$(document).ready(function(){ 
	var user = getCookie("id4me.user");

	if (user != "") {      
	  $('#id4me-button-anchor').attr("href", $('#id4me-button-anchor').attr("data-link") + "&id4me=" + user)
	  $('#id4me-text').html(" Login as " + user);
	  $('#id4me-handler').show();
	  $('#id4me-remove-id').click(function() {
		  deleteCookie('id4me.user');
		  $('#id4me-text').html(" Login with ID4me ");
		  $('#id4me-input').show();
		  $('#id4me-handler-form').show();
		  $('#id4me-input').focus();
	  });
	} else {
	  $('#id4me-handler').hide();
	  $('#id4me-button').click(function() {
		  $('#id4me-input').show();
		  $('#id4me-handler-form').show();
		  $('#id4me-input').focus();
	  });
	  $('#id4me-button').removeAttr("href");
	}
});
