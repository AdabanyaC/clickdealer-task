import React, { useState } from "react";
import "./../styles/promotions.less";
import Modal from "./Modal";
import Logo from "./../assets/logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" className="navbar__logo-img" />
      </div>
      <button className="navbar__cta" onClick={handleOpenModal}>
        Read Me <i class="fa-brands fa-readme ml-1.5"></i>
      </button>
      {isModalOpen && <Modal closeModal={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;
