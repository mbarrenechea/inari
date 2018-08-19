import React from 'react';
import { Form, Text, TextArea } from 'react-form';

import 'whatwg-fetch';

// Styles
import './styles.scss';

class Contact extends React.Component {
  onSubmit = (values) => {
    const {
      firstName,
      lastName,
      email,
      tel
    } = values;

    fetch(`https://script.google.com/macros/s/AKfycbxSOt5Wzx8traptkU0elMVQSFiJC-rQcgwuezw9cN-Lpo6zSog/exec?firstName=${firstName}&lastName=${lastName}&email=${email}&tel=${tel}`, { method: 'GET' })
      .then(() => { console.info('Success'); })
      .catch((error) => {
        console.error('request failed', error);
      });
  }

  render() {
    return (
      <div className="c-contact">
        <div className="wrapper">
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-6">
              <h2>Contacto</h2>
              <Form onSubmit={this.onSubmit}>
                {formApi => (
                  <form onSubmit={formApi.submitForm} id="contact-form">
                    <div className="c-field">
                      <label htmlFor="firstName">Nombre *</label>
                      <Text field="firstName" id="firstName" required />
                    </div>

                    <div className="c-field">
                      <label htmlFor="lastName">Apellidos *</label>
                      <Text field="lastName" id="lastName" required />
                    </div>

                    <div className="c-field">
                      <label htmlFor="email">Email *</label>
                      <Text field="email" id="email" type="email" required />
                    </div>

                    <div className="c-field">
                      <label htmlFor="tel">Teléfono *</label>
                      <Text field="tel" id="tel" type="tel" pattern="^[0-9-+s()]*$" required />
                    </div>

                    <div className="c-field">
                      <label htmlFor="observations">Observaciones</label>
                      <TextArea field="observations" id="observations" rows="8" />
                    </div>

                    <button type="submit" className="c-form-btn -primary">
                      Enviar
                    </button>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
