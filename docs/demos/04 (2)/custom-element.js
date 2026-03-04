class CustomElement extends HTMLDivElement {
constructor ( ) {
	console.log( "CustomElement constructor()" );
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
customElements.define( "custom-element", CustomElement, { extends : "div" } ) ;
