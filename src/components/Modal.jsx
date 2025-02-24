import React from "react";
import "./../styles/promotions.less";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Thought Process Behind the Task</h2>
        <p className="modal__description">
          For my task, I set out to create a promotion for a web design agency,
          showcasing the services they offer to personal and corporate brands.
          What better brand to use than ClickDealer? None.
        </p>
        <p className="modal__description">
          Tools used: ReactJS (HTML and JavaScript), LESS (CSS Preprocessor),
          Font Awesome (icons)
        </p>
        <button className="modal__close" onClick={closeModal}>
          Close <i class="fa-solid fa-xmark ml-1.5"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
