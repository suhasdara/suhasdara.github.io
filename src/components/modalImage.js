import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import "../styles/components/modalImage.css";

function ModalImage({ src, alt, title, height }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <div onClick={() => setShow(!show)} className="d-flex justify-content-center click-image">
        <img src={src} alt={alt} title={title} style={{height: "auto", maxHeight: height}} />
      </div>
      <Modal centered show={show} onHide={() => setShow(!show)} dialogClassName="modal-image">
        {title && (
          <Modal.Header className="bg-light d-flex align-items-center" closeButton>
            <h4 className="bg-light text-dark mb-0">
              {title}
            </h4>
          </Modal.Header>
        )}
        <img src={src} alt={alt} />
      </Modal>
    </>
  );
}

ModalImage.defaultProps = {
  title: undefined
}

ModalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  height: PropTypes.number.isRequired
}

export default ModalImage;
