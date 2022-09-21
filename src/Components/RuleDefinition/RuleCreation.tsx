import React, { ChangeEvent, useState } from 'react';
import styles from './RuleDefinition.module.scss';
import RuleSearchForm from './RuleSearchForm';
import union from '../../assets/images/Union.png'
import unionPart from '../../assets/images/unionpart.png'
import { Expression } from '../../models/Expression'


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
  selectedExpression: Expression | null
}

const RuleCreation = ({selectedExpression}:RuleCreationProps) => {
  const [selectedRules, setSelectedRules]: any = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelectRule = (rule: any) => {
    setSelectedRules([...selectedRules, rule]);
    setSearchValue('');
  };

  const handleRemoveRule = (rule: any) => {
    const filteredRules = selectedRules.filter(
      (r: any) => r.ruleId !== rule.ruleId,
    );
    setSelectedRules(filteredRules);
  };

  return (
      <div className={styles.container}>
        <RuleSearchForm
          rules={rules}
          onInputChange={handleInputChange}
          value={searchValue}
          selectedExpression={selectedExpression}
          selectedRules={selectedRules}
          onSelectRule={handleSelectRule}
          onRemoveRule={handleRemoveRule}
        />
    </div>
  );
};

export default RuleCreation;
