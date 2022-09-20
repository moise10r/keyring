import React from 'react';
import styles from './RuleDefinition.module.scss';

interface SelectedRuleProps {
  rule: {
    id: string;
    title: string;
    rype: string;
    usedBy: [];
  };
  onRemoveRule: (rule: any) => void;
}
const SelectedRule = (props: SelectedRuleProps) => {
  const { rule, onRemoveRule } = props;
  const { title } = rule;
  return (
    <div>
      {title}
      <button onClick={() => onRemoveRule(rule)}>X</button>
    </div>
  );
};

export default SelectedRule;
