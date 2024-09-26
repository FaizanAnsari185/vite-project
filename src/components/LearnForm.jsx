import { useState } from "react";

const LearnForm = () => {
  const [formData, setFormData] = useState({firstName: "", lastName: ""});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({firstName: "", lastName: ""})
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        First Name-
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <br />
        Last Name-
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LearnForm;
