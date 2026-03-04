class CustomElement extends HTMLDivElement {
constructor ( ) {
	console.log( "CustomElement constructor()" );
	super( );
	}	
} 
customElements.define( "custom-element", CustomElement, { extends : "DIV" } ) ;
