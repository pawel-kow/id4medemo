
function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";path=/";
}

/* delete cookie needs improvement, does only work on cookies in top home directory where path=/ */
function delete_cookie( name ) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}  

$(function() {
	$('#id4me-input').keydown(function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		location.href = $('#id4me-button-anchor').attr("data-link") + "&id4me=" + $('#id4me-input').val()  + "&rememberme=true";
	  }
	});
});

$(function() {
	$('#id4me-input-signin').click(function(event){
		console.log("drin");
		event.preventDefault();
		// Trigger the button element with a click
		location.href = $('#id4me-button-anchor').attr("data-link") + "&id4me=" + $('#id4me-input').val()  + "&rememberme=true";
	});
});


$(document).ready(function(){ 
	var user = getCookie("id4me.user");

	if (user != "") {      
	  $('#id4me-button-anchor').attr("href", $('#id4me-button-anchor').attr("data-link") + "&id4me=" + user)
	  $('#id4me-text').html(" Login as " + user);
	  $('#id4me-handler').show();
	  $('#id4me-remove-id').click(function() {
		  delete_cookie('id4me.user');
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
