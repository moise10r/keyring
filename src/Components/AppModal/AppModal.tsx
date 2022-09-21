import React, {useState} from "react";
import RuleCreation from "../RuleDefinition/RuleCreation";
import styles from "./AppModal.module.scss";
import exclamationImg from "../../assets/images/Vector.png";
import CloseIcon from "@mui/icons-material/Close";
import StepProgressBar from "../StepProgressBar/StepProgressBar";
import RuleEpressionLIst from "../RuleExperssions/RuleEpressionList";
import union from '../../assets/images/Union.png'
import intersection from '../../assets/images/intersection.png'
import difference from '../../assets/images/difference.png'
import complement from '../../assets/images/complement.png';
import {Expression} from '../../models/Expression'


interface AppModalProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const expressions:Expression[] = [
  {
      id:1,
      name:'Union',
      image: union
  },
  {
      id:2,
      name:'Intersection',
      image: intersection
  },
  {
      id:3,
      name:'Complement',
      image: complement
  },
  {
      id:4,
      name:'Difference',
      image: difference
  }
]

const AppModal = ({ onClick }: AppModalProps) => {
  let [currentStep, setCurrentStep ] = useState<number>(1) 
  const [selectedExpression, setSelectedExpression ] = useState<Expression | null>(null) 
  const handleSelectExpression = (expression:Expression) => {
    currentStep = 2
    setCurrentStep(currentStep)
    setSelectedExpression(expression)
  }

  const conditionalComponent = () => {
    switch (currentStep) {
      case 1:
        return <RuleEpressionLIst expressions={expressions} onClick={handleSelectExpression} />;
      case 2:
        return <RuleCreation selectedExpression={selectedExpression} />; 
       case 3:
         return;
       default:
         return <RuleCreation selectedExpression={selectedExpression} />;
    }
  };
  return (
    <div className={styles.modelWrapper}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>
          Rule Builder <img src={exclamationImg} alt="exclamation" />
        </h2>
        <button onClick={onClick} className={styles.closeModalBtn}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <StepProgressBar />
      <div className={styles.modalSecondLayer}>
        {conditionalComponent()}
      </div>
 
    </div>
  );
};

export default AppModal;
