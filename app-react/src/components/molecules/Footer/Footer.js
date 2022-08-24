import React, { useState } from 'react';
import { Wrapper, GreenTextWrapper, About } from './Footer-styled';
import { Modal } from 'components/molecules/Modal/Modal';
import AboutPage from 'components/organisms/AboutPage/AboutPage';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <AboutPage></AboutPage>
        </Modal>
        <About onClick={openModal}>
          <span>Więcej informacji</span>
        </About>
        <span>
          &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
        </span>
        <span>Polityka prywatności</span>
      </Wrapper>
    </>
  );
};

export default Footer;
