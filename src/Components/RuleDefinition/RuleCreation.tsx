import React, { ChangeEvent, useState } from 'react';
import styles from './RuleDefinition.module.scss';
import RuleSearchForm from './RuleSearchForm';
import union from '../../assets/images/Union.png';
import unionPart from '../../assets/images/unionpart.png';
import { Expression } from '../../models/Expression';
import Rule from '../../models/Rule';

const rules = [
  {
    ruleId: '0x01',
    rype: 'base',
    title: 'Passport issued by U.S. (USA)',
    usedBy: ['0x03'],
    icon: union,
  },
  {
    ruleId: '0x02',
    rype: 'base',
    title: 'Corporated in U.S. (USA)',
    usedBy: [],
    icon: unionPart,
  },
  {
    ruleId: '0x03',
    rype: 'union',
    title: 'union (G7 individuals)',
    usedBy: [],
    icon: unionPart,
  },
];
interface RuleCreationProps {
  selectedExpression: Expression | null;
  selectedRules: Rule[];
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectRule: (rule: any) => void;
  onRemoveRule: (rule: any) => void;
  isFinalStep: boolean;
  onChangeCurrentStep?: (step: number) => void;
}

const RuleCreation = ({
  selectedExpression,
  selectedRules,
  onSelectRule,
  onRemoveRule,
  searchValue,
  onChange,
  isFinalStep,
  onChangeCurrentStep,
}: RuleCreationProps) => {
  // const handleSelectRule = (rule: any) => {
  //   setSelectedRules([...selectedRules, rule]);
  //   setSearchValue('');
  // };

  // const handleRemoveRule = (rule: any) => {
  //   const filteredRules = selectedRules.filter(
  //     (r: any) => r.ruleId !== rule.ruleId,
  //   );
  //   setSelectedRules(filteredRules);
  // };

  return (
    <div className={styles.container}>
      <RuleSearchForm
        rules={rules}
        onInputChange={onChange}
        value={searchValue}
        selectedExpression={selectedExpression}
        selectedRules={selectedRules}
        onSelectRule={onSelectRule}
        onRemoveRule={onRemoveRule}
        isFinalStep={isFinalStep}
        onChangeCurrentStep={onChangeCurrentStep}
      />
    </div>
  );
};

export default RuleCreation;
