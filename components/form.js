import React, { useState } from "react"; 
import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router";

const FORMSPARK_FORM_ID = "XXX";

function form() {
  const [validated, setValidated] = useState(false);
  const router = useRouter();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      await submit({ name, email, message });
      router.push("/thankyou");
    }
    setValidated(true);
  };

  return (
    <div>
      <form name="contact" noValidate validated={validated} onSubmit={onSubmit}>
        <input
          type="checkbox"
          name="_honeypot"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />
        <input
          type="text"
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          id="message"
          className="form-control mb-2"
          placeholder="Ihre Nachricht"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-block btn-outline-primary rounded"
          disabled={submitting}
        >
          Senden
        </button>
      </form>
    </div>
  );
}

export default form;
