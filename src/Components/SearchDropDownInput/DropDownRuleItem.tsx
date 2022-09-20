import React from 'react';
import styles from './SearchDropDownInput.module.scss';

interface DropDownRuleItemProps {
  rule: {
    id: string;
    title: string;
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
      {rule.title}
    </button>
  );
};

export default DropDownRuleItem;
