import React from 'react';
import DropDownRuleItem from './DropDownRuleItem';
import styles from './SearchDropDownInput.module.scss';

interface DropDownListProps {
  rules: Array<any>;
  onSelectRule: (rule: any) => void;
}

const DropDownList = (props: DropDownListProps) => {
  const { rules, onSelectRule } = props;
  return (
    <div className={styles.dropDownList}>
      {rules.length === 0 && (
        <div className={styles.emptyListIndicator}>
          Ooops, nothing was found.
        </div>
      )}
      {rules.length > 0 && (
        <>
          {rules.map((rule) => (
            <DropDownRuleItem
              onSelectRule={onSelectRule}
              key={rule.id}
              rule={rule}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default DropDownList;
