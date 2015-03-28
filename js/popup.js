( function(){

	var aPopupButtons = document.querySelectorAll( ".popup-button" );
	var iLength = aPopupButtons.length;
	for( var i = 0; i < iLength; i++ ){
		aPopupButtons[i].addEventListener( "click", togglePopup, false  );
	}

	function togglePopup(evt){
		var oPopup = evt.target.nextElementSibling;
		oPopup.classList.toggle( "show" );
	}

} )();

