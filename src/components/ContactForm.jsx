import { useState } from "react";
import "./ContactForm.css";

function ContactForm({ onNext }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    setNameError(val.trim() ? "" : "Name is required.");
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setEmailError(validateEmail(val) ? "" : "Please enter a valid email.");
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setMessage(val);
    setMessageError(
      val.trim().length >= 10
        ? ""
        : "Message should be at least 10 characters."
    );
  };

  const isFormValid =
    name.trim() &&
    email.trim() &&
    message.trim() &&
    !nameError &&
    !emailError &&
    !messageError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmittedData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setNameError("");
    setEmailError("");
    setMessageError("");
  };

  return (
    <>
      <h8k-navbar header="Contact Form"></h8k-navbar>
      <div className="App">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            data-testid="name-input"
          />
          {nameError && <small className="error">{nameError}</small>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            data-testid="email-input"
          />
          {emailError && <small className="error">{emailError}</small>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Message"
            data-testid="message-input"
          />
          {messageError && <small className="error">{messageError}</small>}

          <button type="submit" disabled={!isFormValid} data-testid="submit-button">
            Submit
          </button>
        </form>

        <button onClick={onNext} className="next-button">
          Next Assignment
        </button>

        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactForm;
