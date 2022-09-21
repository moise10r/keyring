import React, { useState } from 'react';
import RuleCreation from '../RuleDefinition/RuleCreation';
import styles from './AppModal.module.scss';
import exclamationImg from '../../assets/images/Vector.png';
import CloseIcon from '@mui/icons-material/Close';
import StepProgressBar from '../StepProgressBar/StepProgressBar';
import RuleEpressionLIst from '../RuleExperssions/RuleEpressionList';
import union from '../../assets/images/Union.png';
import intersection from '../../assets/images/intersection.png';
import difference from '../../assets/images/difference.png';
import complement from '../../assets/images/complement.png';
import { Expression } from '../../models/Expression';
import BaseButton from '../Common/BaseButton';

interface AppModalProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const expressions: Expression[] = [
  {
    id: 1,
    name: 'Union',
    image: union,
  },
  {
    id: 2,
    name: 'Intersection',
    image: intersection,
  },
  {
    id: 3,
    name: 'Complement',
    image: complement,
  },
  {
    id: 4,
    name: 'Difference',
    image: difference,
  },
];

const AppModal = ({ onClick }: AppModalProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [selectedRules, setSelectedRules]: any = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // const handleGoBack = () =>
  const [selectedExpression, setSelectedExpression] =
    useState<Expression | null>(null);
  const handleSelectExpression = (expression: Expression) => {
    setCurrentStep(currentStep + 1);
    setSelectedExpression(expression);
  };

  const handleCreateRule = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSelectRule = (rule: any) => {
    setSelectedRules([...selectedRules, rule]);
    setSearchValue('');
    setIsDisabled(false);
  };

  const handleRemoveRule = (rule: any) => {
    const filteredRules = selectedRules.filter(
      (r: any) => r.ruleId !== rule.ruleId,
    );
    setSelectedRules(filteredRules);
    if (filteredRules.length === 0) {
      setIsDisabled(true);
    }
  };

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const conditionalComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <RuleEpressionLIst
            expressions={expressions}
            onClick={handleSelectExpression}
          />
        );
      case 2:
        return (
          <RuleCreation
            onSelectRule={handleSelectRule}
            selectedRules={selectedRules}
            onRemoveRule={handleRemoveRule}
            selectedExpression={selectedExpression}
            searchValue={searchValue}
            onChange={handleInputChange}
            isFinalStep={false}
          />
        );
      case 3:
        return (
          <RuleCreation
            selectedRules={selectedRules}
            onSelectRule={handleSelectRule}
            onRemoveRule={handleRemoveRule}
            selectedExpression={selectedExpression}
            searchValue={searchValue}
            onChange={handleInputChange}
            isFinalStep={true}
            onChangeCurrentStep={setCurrentStep}
          />
        );
      case 4:
        return (
          <RuleCreation
            selectedRules={selectedRules}
            onSelectRule={handleSelectRule}
            onRemoveRule={handleRemoveRule}
            selectedExpression={selectedExpression}
            searchValue={searchValue}
            onChange={handleInputChange}
            isFinalStep={true}
            onChangeCurrentStep={setCurrentStep}
          />
        );

      default:
        return;
    }
  };
  return (
    <div className={styles.modelWrapper}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>
          Rule Builder <img src={exclamationImg} alt='exclamation' />
        </h2>
        <button onClick={onClick} className={styles.closeModalBtn}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.stepProgressMainWrapper}>
        <StepProgressBar currentStep={currentStep} />
      </div>
      <div className={styles.modalSecondLayer}>{conditionalComponent()}</div>
      <div className={styles.createBtnModalContainer}>
        {currentStep > 1 && (
          <BaseButton
            onClick={handleCreateRule}
            name='Create Rule'
            disabled={isDisabled || currentStep === 3 || currentStep === 4}
          />
        )}
      </div>
    </div>
  );
};

export default AppModal;
