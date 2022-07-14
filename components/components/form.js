import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router";
import { Form, InputGroup } from "react-bootstrap";

const FORMSPARK_FORM_ID = "Ig0E1Azx";

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
      router.push("/danke");
    }
    setValidated(true);
  };

  return (
    <div>
      <Form name="contactlv" 
      noValidate 
      validated={validated} 
      onSubmit={onSubmit}>
        <input
          type="checkbox"
          name="_honeypot"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <Form.Group className="mb-3" controlId="formName">
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
            Bitte geben Sie Ihren Namen ein.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
            Bitte geben Sie eine gültige Email-Adresse ein.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTextarea">
          <InputGroup hasValidation>
            <Form.Control
              as="textarea"
              name="textarea"
              placeholder="Ihre Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
            />
            <Form.Control.Feedback type="invalid">
              Bitte geben Sie Ihre Nachricht ein.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <button
          type="submit"
          className="btn btn-block btn-outline-primary rounded"
          disabled={submitting}
        >
          Senden
        </button>
      </Form>
    </div>
  );
}

export default form;
