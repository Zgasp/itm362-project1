if (!('querySelector' in document && 'addEventListener' in document)) {
  //for old browsers
  return;
}//end if
else{
document.addEventListener('DOMContentLoaded',function(){
	console.log('OMG the dom is loaded')
})
}//End else