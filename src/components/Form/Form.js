import React, { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl + 'insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log('Form data submitted successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
		<p>url : {apiUrl}</p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {/* Add more input fields here as needed */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
