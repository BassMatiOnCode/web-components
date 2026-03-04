class CustomListElement extends HTMLLIElement {
constructor ( ) {
	console.log( "CustomListElement constructor()" );
	super( );
	}
connectedCallback ( ) {
	console.log( "connectedCallback()" );
	}	
disconnectedCallback ( ) {
	console.log( "disconnectedCallback()" );
	}	
connectedMoveCallback ( ) {
	console.log( "connectedMoveCallback()" );
	}	
adoptedCallback ( ) {
	console.log( "adoptedCallback()" );
	}	
} 
customElements.define( "custom-list-element", CustomListElement, { extends : "li" } ) ;
