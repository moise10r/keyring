import React, {useState} from 'react';
import Header from '../../Header/Header'
import styles from './Home.module.scss'
import BaseButton from '../../Common/BaseButton';

function Home() {
    const [isModalOpen, setIsModalOPen] = useState(false)
    const handleOPenModal = ()=>{        
        setIsModalOPen(!isModalOpen)
        console.log(isModalOpen);
    }
    return (
        <div className="main-home-container">
            <div className="main-home-content">
                <Header />
                <div className={styles.createRuleMainContainer}>
                    <div className={styles.createMainContent}>
                        <div className={styles.createRuleDescription}><p className={styles.para}>Underlying Page from which the user clicks "Create Rule", which opens this modal/wizard</p></div>
                        <div className={styles.createRuleBtnContainer}>
                            <BaseButton className={styles.createRuleBtn} onClick={handleOPenModal} name="Create Rule" disabled={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;