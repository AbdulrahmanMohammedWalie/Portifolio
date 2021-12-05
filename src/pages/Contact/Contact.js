import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./style.scss";
function Contact() {
  const [state, handleSubmit] = useForm("myyogjoa");
  if (state.succeeded) {
    return (
      <div className="p">
        <p>Massage Sent!!</p>
      </div>
    );
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Massage:</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
