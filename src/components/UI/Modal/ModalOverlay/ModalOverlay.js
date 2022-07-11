const ModalOverlay = ({ children, classnames: { modal, content } }) => {
  return (
    <div className={modal}>
      <div className={content}>{children}</div>
    </div>
  );
};

export default ModalOverlay;
