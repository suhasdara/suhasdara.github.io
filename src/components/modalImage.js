import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import "../styles/components/modalImage.css";

function ModalImage(props) {
  const [show, setShow] = useState(false);
  let { src, alt, title, height, ...rest } = props

  // Ugly hacks against gatsby image wrapper >:(
  let img_style, modalSrc
  if(Object.keys(rest).length !== 0) {
    img_style = { height: "auto", maxHeight: height, position: "absolute", top: "0px", left: "0px" };
    let match = rest.srcSet.find(element => element.split(" ")[1] === "800w");
    modalSrc = match ? match.split(" ")[0] : rest.srcSet[rest.srcSet.length - 1].split(" ")[0]
  } else {
    img_style = { height: "auto", maxHeight: height };
    modalSrc = src;
  }

  return (
    <>
      <img
        {...rest}
        onClick={() => setShow(!show)}
        className={rest.className + " click-image"}
        src={src}
        alt={alt}
        title={title}
        style={img_style}
      />
      <Modal
        centered
        show={show}
        onHide={() => setShow(!show)}
        dialogClassName="modal-image"
      >
        {title && (
          <Modal.Header
            className="bg-light d-flex align-items-center"
            closeButton
          >
            <h4 className="bg-light text-dark mb-0">{title}</h4>
          </Modal.Header>
        )}
        <img src={modalSrc} alt={alt} />
      </Modal>
    </>
  );
}

ModalImage.defaultProps = {
  title: undefined,
};

ModalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ModalImage;
