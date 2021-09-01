import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

import "../styles/components/subscribeButton.css";

function SubscribeButton({ text, className }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShow(!show)}
        className={className + " font-weight-bold text-white subscribe"}
      >
        {text}
      </Button>
      <Modal
        centered
        show={show}
        onHide={() => setShow(!show)}
        dialogClassName="modal-subscribe"
      >
        <ModalHeader
          className="bg-light d-flex align-items-center"
          closeButton
        >
          <h4 className="bg-light text-dark mb-0">Subscribe to new blog posts</h4>
        </ModalHeader>
        <Form
          action="https://gmail.us5.list-manage.com/subscribe/post?u=626abcd702a19dae66e0ec0f5&amp;id=2c3a2cbe64"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="mb-1 d-flex flex-column align-items-center"
          target="_blank"
          noValidate
          onSubmit={() => setShow(!show)}
        >
          <Form.Label
            htmlFor="mce-EMAIL"
            className="d-none"
            visuallyHidden
          >
            Email
          </Form.Label>
          <Form.Control
            type="email"
            name="EMAIL"
            className="d-inline m-2"
            id="mce-EMAIL"
            placeholder="name@example.com"
            style={{width: "90%"}}
            required
          />
          {/*prevent bot signups*/}
          <div style={{position: "absolute", left: -5000, ariaHidden: true}}>
            <Form.Control
              type="text"
              name="b_626abcd702a19dae66e0ec0f5_2c3a2cbe64"
              tabIndex="-1"
            />
          </div>
          <Button
            type="submit"
            name="subscribe"
            variant="danger"
            className="font-weight-bold"
            id="mc-embedded-subscribe"
          >
            Subscribe
          </Button>
        </Form>
        <p className="text-dark text-center mb-1">
          <small>
            You can instead subscribe via <a href="/rss.xml">RSS</a> elsewhere
          </small>
        </p>
      </Modal>
    </>
  )
}

export default SubscribeButton;