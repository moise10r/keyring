import React from 'react';
import styles from './SearchDropDownInput.module.scss';
import exclamatImg from '../../assets/images/Vector.png'

interface DropDownRuleItemProps {
  rule: {
    id: string;
    title: string;
    icon: string
    rype: string;
    usedBy: [];
  };
  onSelectRule: (rule: any) => void;
}

const DropDownRuleItem = (props: DropDownRuleItemProps) => {
  const { rule, onSelectRule } = props;
  return (
    <button
      onClick={() => onSelectRule(rule)}
      className={styles.dropDownRuleItem}
    >
      <span><img src={rule.icon} alt="expression-img" /></span>
      <span className={styles.title}>{rule.title}</span>
      <span><img src={exclamatImg} alt=""/></span>
    </button>
  );
};

export default DropDownRuleItem;
