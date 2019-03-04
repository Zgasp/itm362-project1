(function(){
	if (!('querySelector' in document && 'addEventListener' in document)) {
  	//for old browsers
  	return;
	}//end if

	document.addEventListener('DOMContentLoaded',function(){
		console.log('The DOM is loaded')
	})

	var name_input = document.querySelector('#name');
  name_input.addEventListener('focus', function(){
    console.log('Full name is focused');
  });

  var email_input = document.querySelector('#email');
  email_input.addEventListener('focus', function(){
    console.log('Email is focused');
  });

}());