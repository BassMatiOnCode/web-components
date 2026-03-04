class PopupInfo extends HTMLElement {
	static observedAttributes = [ "size" ];
constructor ( ) {
	super( );
	}
attributeChangedCallback(name, oldValue, newValue) {
	// This feature is available for custom elements.
	console.log( `Attribute ${name} has changed from ${oldValue} to ${newValue}.` );
	}
connectedCallback ( ) {
	// The element was inserted into to document.
	console.log( "Custom element added to page." );
	}
disconnectedCallback ( ) {
	// The element was removed from a document.
	console.log( "Custom element removed from page." );
	}
connectedMoveCallback ( ) {
	// The element was moved within the document.
	console.log( "Custom element moved with moveBefore( )" );
	}
adoptedCallback ( ) {
	// The element was inserted into another document.
	console.log( "Custom element moved to new page." );
	}
}
customElements.define( "popup-info", PopupInfo );
