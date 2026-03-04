class RegistrationForm extends HTMLFormElement {
constructor ( ) {
	console.log( "CustomElement constructor()" );
	super( );
	}	
connectedCallback ( ) {
	console.log( "CutomElement.connectedCallback()" );
	this.innerHTML = `<table><tbody><tr>
			<td><label for="firstName">First name:</label></td>
			<td><input id="firstName" type="text" /></td>
		</tr><tr>
			<td><label for="lastName">Last name:</label></td>
			<td><input id="lastName" type="text" /></td>
		</tr><tr>
			<td><label for="email">EMail:</label></td>
			<td><input id="email" type="text" /></td>
		</tr><tr>
			<td></td>
			<td><button>Submit</button></td>
		</tr></tbody></table>
		</form>
		` ;
	}
disconnectedCallback ( ) {
	console.log( "CutomElement.disconnectedCallback()" );
	}
} 
customElements.define( "registration-form", RegistrationForm, { extends : "form" } ) ;
