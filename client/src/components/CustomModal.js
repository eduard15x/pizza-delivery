import { GoX } from "react-icons/go";
const CustomModal = ({ modalView, modalTitle, component, setShowModal }) => {
  return modalView ? (
    <div>
      <GoX onClick={() => setShowModal(false)} />
      <p>{modalTitle}</p>
      {component}
    </div>
  ) : (
    ""
  );
};

export default CustomModal;
