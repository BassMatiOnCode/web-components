class PopupInfo extends HTMLElement {
	// An autonomous custom element
constructor ( ) {
	console.log( "Constructor running" );
	super( );
	}
connectedCallback ( ) {
	console.log( "connectedCallback() running" );
	const shadow = this.attachShadow( { mode: "open" } );
	// Create a wrapper
	const wrapper = document.createElement( "span" );
	wrapper.setAttribute( "class", "wrapper" );
	// with icon
	const icon = document.createElement( "span" );
	icon.setAttribute( "class", "icon" );
	icon.setAttribute( "tabindex", 0 );
	// and info text
	const info = document.createElement( "span" );
	info.setAttribute( "class", "info" );
	info.textContent = this.getAttribute( "data-text" );
	// Insert icon
	const img = document.createElement( "img" );
	img.src = this.getAttribute( "img" ) || "default.png" ;
	icon.appendChild( img );
	// Create some CSS to apply to the shadow dom
	const style = document.createElement( "style" );
	console.log( `Style is ${ style.isConnected ? "" : "not " }connected` );
	style.textContent = `
		.wrapper { position : relative }
		.info {
			font-size : 0.8rem ;
			width : 200px ;
			display : inline-block ;
			border : 1px solid black ;
			padding : 10px ;
			background : white ;
			border-radius : 10px ;
			opacity : 0 ;
			transition : 0.6s all ;
			position : absolute ;
			bottom : 20px ;
			left : 10px ;
			z-index : 3 ;
			}
		img { width : 1.2rem }
		.icon:hover + .info, .icon:focus + .info { opacity : 1 }
		` ;
	// Attach the created elements to the shadow dom
	shadow.appendChild( style );
	console.log( `Style is ${ style.isConnected ? "" : "not " }connected` );
	shadow.appendChild( wrapper );
	wrapper.appendChild( icon );
	wrapper.appendChild( info );
}	}

// Custom element registration
customElements.define( "popup-info", PopupInfo );
