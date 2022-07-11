import { Fragment } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay/ModalOverlay";

import classes from "./Modal.module.css";

const portalElementId = document.getElementById("overlays");
const Modal = ({ children }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop className={classes.backdrop} />, portalElementId)}
      {createPortal(
        <ModalOverlay
          classnames={{ modal: classes.modal, content: classes.content }}
        >
          {children}
        </ModalOverlay>,
        portalElementId
      )}
    </Fragment>
  );
};

export default Modal;
