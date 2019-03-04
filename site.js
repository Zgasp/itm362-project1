(function(){
	if (!('querySelector' in document && 'addEventListener' in document)) {
  	//for old browsers
  	return;
	}//end if

	document.addEventListener('DOMContentLoaded',function(){
		console.log('The DOM is loaded')
	})
}());