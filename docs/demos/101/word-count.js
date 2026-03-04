class WordCount extends HTMLParagraphElement {
constructor ( ) {
	super( );
	// do not access element attributes or child elements here
	}
connectedCallback ( ) {
	console.log( "Custom element added to page." );
	}
disconnectedCallback ( ) {
	// This feature is available for custom elements.
	console.log( "Custom element removed from page." );
	}
connectedMoveCallback ( ) {
	// The element was inserted into to document.
	console.log( "Custom element moved with moveBefore( )" );
	}
adoptedCallback ( ) {
	// The element was removed from a document.
	console.log( "Custom element moved to new page." );
	}
}

customElements.define( "word-count", WordCount, { extends: "p" } );