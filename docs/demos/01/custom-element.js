customElements.define( "custom-element", class CustomElement extends HTMLElement {
constructor ( ) {
	console.log( "CustomElement constructor()" );
	super( );
	}	
connectedCallback ( ) {
	console.log( "CutomElement.connectedCallback()" );
	}
disconnectedCallback ( ) {
	console.log( "CutomElement.disconnectedCallback()" );
	}
} ) ;
