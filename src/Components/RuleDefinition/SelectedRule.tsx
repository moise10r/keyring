import React from 'react';
import styles from './RuleDefinition.module.scss';
import exclamatImg from '../../assets/images/Vector.png'

interface SelectedRuleProps {
  rule: {
    id: string;
    title: string;
    rype: string;
    icon: string;
    usedBy: [];
  };
  onRemoveRule: (rule: any) => void;
}
const SelectedRule = (props: SelectedRuleProps) => {
  const { rule, onRemoveRule } = props;
  return (
    <div className={styles.selectedRuleContainer}>
      <div><img src={rule.icon} alt="expression-img" /></div>
      <div className={styles.middleContainer}>
        <span className={styles.title}>{rule.title}</span>
        <span><img src={exclamatImg} alt=""/></span>
      </div>
      <button className={styles.removeSelected} onClick={() => onRemoveRule(rule)}>X</button>
    </div>
  );
};

export default SelectedRule;
