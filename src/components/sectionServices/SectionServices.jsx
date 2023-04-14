import React, { useState } from "react";
import styles from ".././sectionServices/SectionServices.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const Services = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="services" className={styles.main}>
      <div className={styles.serviceText}>
        <h2>Serviços prestados</h2>
      </div>

      <div className={styles.mainFlex}>
        <div className={styles.cardOneTwo}>
          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Injeção eletronica</p>
              <button onClick={openModal}>Open Modal</button>
              <div className={styles.container}>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  overlayClassName={styles.modalOverlay}
                  className={styles.modalContent}
                >
                  <h2>Hello - I am a modal!</h2>
                  <br />
                  <p>
                    We maintain that accessibility is a key component of any
                    modern web application. As such, we have created this modal
                    in such a way that it fulfills the accessibility
                    requirements of the modern web. We seek to keep the focus on
                    accessibility while providing a functional, capable modal
                    component for general use.
                  </p>
                  <br />
                  <button onClick={closeModal} className={styles.buttonModal}>
                    Voltar
                  </button>
                </Modal>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Suspençao mecanica</p>
              <button onClick={openModal}>Open Modal</button>
              <div className={styles.container}>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  overlayClassName={styles.modalOverlay}
                  className={styles.modalContent}
                >
                  <h2>Hello - I am a modal!</h2>
                  <br />
                  <p>
                    We maintain that accessibility is a key component of any
                    modern web application. As such, we have created this modal
                    in such a way that it fulfills the accessibility
                    requirements of the modern web. We seek to keep the focus on
                    accessibility while providing a functional, capable modal
                    component for general use.
                  </p>
                  <br />
                  <button onClick={closeModal} className={styles.buttonModal}>
                  Voltar
                  </button>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardThreeFor}>
          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Injeção mecanica</p>
              <button onClick={openModal}>Open Modal</button>
              <div className={styles.container}>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  overlayClassName={styles.modalOverlay}
                  className={styles.modalContent}
                >
                  <h2>Hello - I am a modal!</h2>
                  <br />
                  <p>
                    We maintain that accessibility is a key component of any
                    modern web application. As such, we have created this modal
                    in such a way that it fulfills the accessibility
                    requirements of the modern web. We seek to keep the focus on
                    accessibility while providing a functional, capable modal
                    component for general use.
                  </p>
                  <br />
                  <button onClick={closeModal} className={styles.buttonModal}>
                  Voltar
                  </button>
                </Modal>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Motores mecanica</p>
              <button onClick={openModal}>Open Modal</button>
              <div className={styles.container}>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  overlayClassName={styles.modalOverlay}
                  className={styles.modalContent}
                >
                  <h2>Hello - I am a modal!</h2>
                  <br />
                  <p>
                    We maintain that accessibility is a key component of any
                    modern web application. As such, we have created this modal
                    in such a way that it fulfills the accessibility
                    requirements of the modern web. We seek to keep the focus on
                    accessibility while providing a functional, capable modal
                    component for general use.
                  </p>
                  <br />
                  <button onClick={closeModal} className={styles.buttonModal}>
                  Voltar
                  </button>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
