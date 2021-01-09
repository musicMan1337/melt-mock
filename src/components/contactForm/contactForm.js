import React from 'react';

import './contactForm.scss';
import {
  Button,
  Input,
  Label,
  Textarea,
} from 'src/components/shared';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2>
        Contact<strong> Us.</strong>
      </h2>
      <p>
        Fill out the form below and someone will get back to you
        faster than a speeding bullet!
      </p>
      <form
        className="contact-form"
        onSubmit={(ev) => ev.preventDefault()}
      >
        <Label htmlFor="name">
          What is your name?
          <Input type="text" name="name" required={true} />
        </Label>

        <Label htmlFor="email">
          What is your email address?
          <Input type="text" name="email" required={true} />
        </Label>

        <Label htmlFor="superpower">
          What is your superpower?
          <Input type="text" name="superpower" required={true} />
        </Label>

        <Label htmlFor="mission">
          What is your mission?
          <Textarea name="mission" required={true} />
        </Label>

        <Button variant="btn-submit" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
