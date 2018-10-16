import React from 'react';
import classnames from 'classnames';
import { Form, Text, TextArea } from 'react-form';

import 'whatwg-fetch';

// Components
import Spinner from 'components/ui/spinner';

// Styles
import './styles.scss';

class Contact extends React.Component {
  state = {
    submitting: false,
    submitted: false,
    submittedError: false
  }

  onSubmit = (values) => {
    this.setState({ submitting: true });
    const {
      firstName,
      lastName,
      email,
      tel,
      observations
    } = values;

    fetch(`https://script.google.com/macros/s/AKfycbxSOt5Wzx8traptkU0elMVQSFiJC-rQcgwuezw9cN-Lpo6zSog/exec?firstName=${firstName}&lastName=${lastName}&email=${email}&tel=${tel}&observations=${observations}`, { method: 'GET' })
      .then(() => {
        this.setState({
          submitting: false,
          submitted: true,
          submittedError: false
        });
        console.info('Success');
      })
      .catch((error) => {
        this.setState({
          submitting: false,
          submitted: false,
          submittedError: true
        });

        console.error('request failed', error);
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({
            submitting: false,
            submitted: false,
            submittedError: false
          });
        }, 5000);
      });
  }

  render() {
    const { submitting, submitted, submittedError } = this.state;

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

                    <button
                      type="submit"
                      disabled={submitting || submitted || submittedError}
                      className={classnames({
                        'c-form-btn': true,
                        '-success': submitted,
                        '-error': submittedError
                      })}
                    >
                      {submitting && <Spinner className="-tiny" />}
                      {submitted && 'Gracias por contactar con nosotros.'}
                      {submittedError && 'Parece que ha habido un error. Inténtelo de nuevo.'}
                      {!submitted && !submittedError && 'Enviar'}
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
