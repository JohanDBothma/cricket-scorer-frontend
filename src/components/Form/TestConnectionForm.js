import React, { useState } from 'react';
import { Formik, Form } from 'formik';

const TestConnectionForm = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <div>
      <h1>Test the connection with the backend</h1>
      <Formik
        initialValues={{
          'response': ''
        }}
        onSubmit={async (setSubmitting) => {
          try {
            const response = await fetch(apiUrl, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (response.ok) {
              const data = await response.json();
              setResponseMessage(data.message);
            } else {
              setResponseMessage('Error connecting to the server');
            }
          } catch (error) {
            console.error('Error submitting form data:', error);
            setResponseMessage('Error connecting to the server');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          isSubmitting,
        }) => (
          <Form>
            <button type="submit" disabled={isSubmitting}>
              Test Connection
            </button>
          </Form>
        )}
      </Formik>
      {responseMessage && (
        <div className="response-message">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default TestConnectionForm;
