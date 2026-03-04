class Square extends HTMLElement {
	static get observedAttributes( ) { return ["color", "size"] }  // Read-only array for observed attributes
constructor ( ) {
	super( );
	const shadow = this.attachShadow( { mode: "open" } );
	const div = document.createElement( "div" );
	const style = document.createElement( "style" );
	shadow.appendChild( style );
	shadow.appendChild( div );
	}
connectedCallback ( ) {
	console.log( "Custom square element added to page." );
	updateStyle( this );
	}
disconnectedCallback ( ) {
	console.log( "Custom square element removed from page." );
	}
adoptedCallback ( ) {
	console.log( "Custom square element moved to new page." );
	}
attributeChangedCallback( name, oldValue, newValue ) {
	console.log( "Custom square element attributes changed." );
	updateStyle( this );
}	}

customElements.define( "custom-square", Square );

function updateStyle( square ) {
	square.shadowRoot.querySelector( "style" ).textContent = `
	div {
		width: ${ square.getAttribute( "size" ) }px;
		height: ${ square.getAttribute( "size" ) }px;
		background-color: ${ square.getAttribute( "color" ) };
		}`;
	}

const add = document.querySelector( ".add" );
const update = document.querySelector( ".update" );
update.disabled = true;
const remove = document.querySelector( ".remove" );
remove.disabled = true;
let square;

function random( min, max ) {
	return Math.floor( Math.random( ) * (max - min + 1) + min );
	}

add.onclick = function ( ) {
	// Create a custom square element
	square = document.createElement( "custom-square" );
	square.setAttribute( "size", "100" );
	square.setAttribute( "color", "red" );
	document.body.appendChild( square );
	update.disabled = false;
	remove.disabled = false;
	add.disabled = true;
	} ;

update.onclick = function ( ) {
	// Randomly update square's attributes
	square.setAttribute( "size", random( 50, 200 ));
	square.setAttribute ( "color" , `rgb(${ random(0, 255) }, ${ random(0, 255) }, ${ random(0, 255) })` );
	} ;

remove.onclick = function ( ) {
	// Remove the square
	document.body.removeChild( square );
	update.disabled = true;
	remove.disabled = true;
	add.disabled = false;
	} ;
