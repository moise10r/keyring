import React, { useState } from "react";
import styles from "./Home.module.scss";
import Header from "../../Components/Header/Header";
import BaseButton from "../../Components/Common/BaseButton";
import AppModal from "../../Components/AppModal/AppModal";

function Home() {
  const [isModalOpen, setIsModalOPen] = useState(false);
  const handleOPenModal = () => {
    setIsModalOPen(true);
  };
  const handleCloseModal = () => {
    setIsModalOPen(false);
  }
  return (
    <div className={styles.mainHomeContainer}>
      <div className={styles.mainHomeContent}>
        <Header />
        <div className={styles.createRuleMainContainer}>
          <div className={styles.createMainContent}>
            <div className={styles.createRuleDescription}>
              <p className={styles.para}>
                Underlying Page from which the user clicks "Create Rule", which
                opens this modal/wizard
              </p>
            </div>
            <div className={styles.createRuleBtnContainer}>
              <BaseButton
                className={styles.createRuleBtn}
                onClick={handleOPenModal}
                name="Create Rule"
                disabled={false}
              />
            </div>
          </div>
        </div>
        {isModalOpen && (
              <div className={styles.modalContainer}>
                <div className={styles.modalBg}></div>
                <div className={styles.modalContentWrapper}>
                    <AppModal onClick={handleCloseModal} />
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

export default Home;
