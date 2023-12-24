import { sanitizeString, validateEmail } from './validate.js';

const newsletterForm = document.querySelector( '.newsletter-form' );

if ( newsletterForm ) {
	newsletterForm.addEventListener( 'submit', handleNewsletterSubmit );
}

function handleNewsletterSubmit( event ) {
	event.preventDefault();

	const errors = [];

	const formFields = event.target.elements;
	const firstName = sanitizeString( formFields.nome.value );
	const email = formFields.email.value;
	const privacy = formFields.privacy.checked;

	if ( firstName === '' ) {
		errors.push( {
			message: 'Nome obbligatorio',
			field: formFields.nome
		} );
	}

	if ( email === '' || !validateEmail( email ) ) {
		errors.push( {
			message: 'Email obbligatoria o non valida',
			field: formFields.email
		} );
	}

	if ( !privacy ) {
		errors.push( {
			message: 'Devi accettere la privacy policy',
			field: formFields.privacy
		} );
	}

	if ( errors.length > 0 ) {
		showFormStatus( "", errors );
	} else {
		showFormStatus( "Grazie per esserti iscritto alla newsletter" );
	}

}

function showFormStatus( message, errors = [] ) {

	const formStatusBox = document.querySelector( '.form-status' );

	if ( errors.length > 0 ) {
		formStatusBox.classList.add( 'error' );
		message = `<h4>Ci sono ${errors.length} errori:</h4>`;
		message += `<ul class="no-style">`;
		errors.forEach( error => {
			message += `<li>
			<a href="#${error.field.id}" id="${error.field.id}-error">
			${error.message}
			</a></li>`;
			error.field.classList.add( 'error' );
		} );

	} else {
		formStatusBox.classList.remove( 'error' );
		newsletterForm.querySelectorAll( '.error' )?.forEach( field => field.classList.remove( 'error' ) );
		newsletterForm.reset();
	}

	formStatusBox.innerHTML = message;

}
