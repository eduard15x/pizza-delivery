import { GoX } from "react-icons/go";
const CustomModal = ({ modalView, modalTitle, component, setShowModal }) => {
  return modalView ? (
    <div className="modal">
      <div className="modal-content">
        <GoX
          onClick={() => setShowModal(false)}
          className="modal-content--close-btn"
        />
        <p className="modal-content--title">{modalTitle}</p>
        {component}
      </div>
    </div>
  ) : (
    ""
  );
};

export default CustomModal;
