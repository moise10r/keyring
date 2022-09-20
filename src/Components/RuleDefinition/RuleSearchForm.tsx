import React from 'react';
import SearchDropDownInput from '../SearchDropDownInput/SearchDropDownInput';
import styles from './RuleDefinition.module.scss';
import SelectedRule from './SelectedRule';
interface RuleSearchFormProps {
  rules: Array<any>;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSelectRule: (rule: any) => void;
  selectedRules: Array<any>;
  onRemoveRule: (rule: any) => void;
}

const RuleSearchForm = (props: RuleSearchFormProps) => {
  const {
    rules,
    value,
    onInputChange,
    onSelectRule,
    selectedRules,
    onRemoveRule,
  } = props;

  const notSelectedRules = rules.filter(
    (rule) =>
      !selectedRules.find(
        (selectedRule) => selectedRule.ruleId === rule.ruleId,
      ),
  );

  const filteredRules = notSelectedRules.filter((rule) => {
    if (value === '') {
      return true;
    }
    return (
      rule.title.toLowerCase().includes(value.toLowerCase()) ||
      rule.rype.toLowerCase().includes(value.toLowerCase())
    );
  });

  return (
    <div className={styles.ruleSearchForm}>
      <div className={styles.header}>Unitled Union Rule</div>
      <div className={styles.formWrapper}>
        <div className={styles.selectedRulesList}>
          {selectedRules.map((rule) => (
            <SelectedRule
              key={rule.id}
              rule={rule}
              onRemoveRule={onRemoveRule}
            />
          ))}
        </div>
        <div className={styles.ruleSearchFormWrapper}>
          <SearchDropDownInput
            onInputChange={onInputChange}
            value={value}
            rules={filteredRules}
            onSelectRule={onSelectRule}
            selectedRules={selectedRules}
          />
        </div>
      </div>
    </div>
  );
};

export default RuleSearchForm;
