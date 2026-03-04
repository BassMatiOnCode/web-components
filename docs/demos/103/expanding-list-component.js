class ExpandingList extends HTMLUListElement {
constructor ( ) {
	// Store a reference to this element
	self = super( );
	}
connectedCallback ( ) {
	const listElements = Array.from( self.querySelectorAll( "ul" ));
	const listItemElements = Array.from( self.querySelectorAll( "li" ));
	// Hide all child lists of this element
	listElements.forEach( ul => ul.style.display = "none" );
	// Look through list item elements
	listItemElements.forEach( li =>  { 
		if ( li.querySelectorAll( "ul" ).length > 0 ) {
			// Add an attribute which can be used  by the style to show an open or closed icon
			li.setAttribute( "class", "closed" );
			// Move the li element's text node to a new span element
			const newSpan = document.createElement( "span" );
			newSpan.append( li.childNodes[ 0 ] );
			li.prepend( newSpan );
			// Add a cursor style and click event handler to the SPAN
			newSpan.style.cursor = "pointer";
			newSpan.addEventListener( "click", e => {
				// next sibling to the span should be the ul
				const nextul = e.target.nextElementSibling;
				// Toggle visible state and update class attribute on ul
				if ( nextul.style.display == "block" ) {
					nextul.style.display = "none";
					nextul.parentNode.setAttribute( "class", "closed" );
				} else {
					nextul.style.display = "block";
					nextul.parentNode.setAttribute( "class", "open" );
				}	} ) ;
			}
		} ) ;
}	}

// Define the new element
customElements.define( "expanding-list", ExpandingList, { extends: "ul" } );
