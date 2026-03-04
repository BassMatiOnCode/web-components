class webComponent extends HTMLDivElement {
constructor ( ) {
	self = super( );  // store a reference to the element
	}
connectedCallback ( ) {
	console.log( this );
		// The element was inserted into to document.
	console.log( "Custom element added to page." );
	{	// Create "regular" element tree
		const span = document.createElement( "span" );
		span.setAttribute( "id" , "span-in-shadowtree" );
		span.textContent = "SPAN in the component";
		self.appendChild( span );
		}	
	if ( true ) {	// Create the shadow tree
		const shadowRoot = self.attachShadow( { mode: configuration.get( "shadowmode" ) || "open" } );
		const span = document.createElement( "span" );
		span.setAttribute( "id" , "span-in-shadowtree" );
		span.textContent = "SPAN in the shadow DOM";
		shadowRoot.appendChild( span );
		}
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
const configuration = new URLSearchParams( new URL( import.meta.url ).search );
customElements.define( "web-component", webComponent, { extends: "DIV" } );
