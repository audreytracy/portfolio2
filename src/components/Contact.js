import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import { Button, Form, Toast } from 'react-bootstrap';

export default function Contact() {

    function sendEmail(event) {
        event.preventDefault();
        emailjs.sendForm('service_zdkvmgd', 'template_9bz1cqf', event.target, 'XiYST48ojSExgAv1J')
            .then((result) => {
                setShow(true); // show message sent confirmation
                event.target.reset(); // reset form
            }, (error) => {
                console.log(error.text);
            });
    }

    const [show, setShow] = useState(false); // show toast (message sent confirmation)

    return (
        <div>
            <Toast className="position-absolute end-0" bg="success" onClose={() => setShow(false)} show={show} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Message sent!</strong>
                    <small>Now</small>
                </Toast.Header>
            </Toast>

            <h1><code>Send me a message!</code></h1>
            <Form className="contact-form" onSubmit={sendEmail}>

                <Form.Group className="mb-3 message" controlId="contact_email">
                    <Form.Control type="email" placeholder="Your email" name="from_email" required />
                </Form.Group>

                <Form.Group className="mb-3 message" controlId="contact_name">
                    <Form.Control type="text" placeholder="Your name" name="from_name" required />
                </Form.Group>

                <Form.Group className="mb-3 message" controlId="message">
                    <Form.Control as="textarea" rows={6} type="text" placeholder="Type message..." name="message" required />
                </Form.Group>

                <div className="send_button">
                    <Button variant="outline-secondary" type="submit" value="Send" > Send </Button>
                </div>
            </Form>
        </div>
    );
}