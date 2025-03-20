import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Simulating form submission
    setSubmitStatus("loading");

    // Simulate API call delay
    setTimeout(() => {
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setValidated(false);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* We don't need the navbar placeholder since Header component is in App.js */}

      <div className="page-header">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="page-title">Contact</h1>
              <div className="page-subtitle">Neem contact met ons op</div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="main-content">
          <Col lg={7} className="contact-form-container">
            <div className="content-block">
              <h2 className="section-title">Stuur ons een bericht</h2>

              {submitStatus === "success" && (
                <Alert variant="success" className="success-alert">
                  <div className="alert-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="alert-content">
                    <h4>Bericht verzonden!</h4>
                    <p>
                      Dank u voor uw bericht. We nemen zo snel mogelijk contact
                      met u op.
                    </p>
                  </div>
                </Alert>
              )}

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Naam *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Uw naam"
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul alstublieft uw naam in
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>E-mail *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Uw e-mailadres"
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul alstublieft een geldig e-mailadres in
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Telefoonnummer</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Uw telefoonnummer"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Onderwerp *</Form.Label>
                      <Form.Select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="general">Algemene vraag</option>
                        <option value="appointment">Afspraak maken</option>
                        <option value="testdrive">Proefrit aanvragen</option>
                        <option value="parts">Onderdelen en service</option>
                        <option value="other">Overig</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Selecteer alstublieft een onderwerp
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Bericht *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Typ hier uw bericht..."
                  />
                  <Form.Control.Feedback type="invalid">
                    Vul alstublieft uw bericht in
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  type="submit"
                  className="submit-button"
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Versturen...
                    </>
                  ) : (
                    "Versturen"
                  )}
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={5} className="contact-info-container">
            <div className="content-block contact-info">
              <h2 className="section-title">Contactgegevens</h2>

              <div className="contact-method">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info">
                  <h3>Telefoon</h3>
                  <p>
                    <a href="tel:+31201234567">+31646056382</a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info">
                  <h3>E-mail</h3>
                  <p>
                    <a href="mailto:info@autoverkoop.nl">
                      info@autoboomgaard.nl
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info">
                  <h3>Adres</h3>
                  <p>
                    Ondernemingsweg 56C
                    <br />
                    1422 DZ UITHOORN
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="info">
                  <h3>Openingstijden</h3>
                  <div className="opening-hours">
                    <div className="day-time">
                      <span className="day">Maandag - Vrijdag:</span>
                      <span className="time">9:00 - 18:00</span>
                    </div>
                    <div className="day-time">
                      <span className="day">Zaterdag:</span>
                      <span className="time">10:00 - 17:00</span>
                    </div>
                    <div className="day-time">
                      <span className="day">Zondag:</span>
                      <span className="time">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
