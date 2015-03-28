( function(){

	var aPopupButtons = document.querySelectorAll( ".popup-button" );
	var i = 0, element;
	for( ; element = aPopupButtons[ i++ ] ; ){
		element.addEventListener( "click", togglePopup, false  );
	}

	function togglePopup(evt){
		var oPopup = evt.target.nextElementSibling;
		oPopup.classList.toggle( "show" );
	}

} )();

