import React from 'react';
import SearchDropDownInput from '../SearchDropDownInput/SearchDropDownInput';
import styles from './RuleDefinition.module.scss';
import SelectedRule from './SelectedRule';
import { Expression } from '../../models/Expression';
import exclamat from '../../assets/images/Vector.png'
import Rule from '../../models/Rule';
interface RuleSearchFormProps {
  rules: Array<any>;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSelectRule: (rule: any) => void;
  selectedRules: Rule[] ;
  onRemoveRule: (rule: any) => void;
  selectedExpression?: Expression | null
}

const RuleSearchForm = (props: RuleSearchFormProps) => {
  const {
    rules,
    value,
    onInputChange,
    onSelectRule,
    selectedRules,
    onRemoveRule,
    selectedExpression
  } = props;

  const notSelectedRules = rules.filter(
    (rule) =>
      !selectedRules.find(
        (selectedRule:Rule) => selectedRule.ruleId === rule.ruleId,
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
      <h3 className={styles.header}><span><img src={selectedExpression?.image} alt="expression-img" /></span><span>{selectedExpression?.name}</span><span><img src={exclamat} alt="exclamation"/></span></h3>
      <div className={styles.formWrapper}>
        <div className={styles.selectedRulesList}>
          {selectedRules.map((rule) => (
            <SelectedRule
              key={rule.ruleId}
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
