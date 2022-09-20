import React, { ChangeEvent, useState } from 'react';
import styles from './RuleDefinition.module.scss';
import RuleSearchForm from './RuleSearchForm';

const rules = [
  {
    ruleId: '0x01',
    rype: 'base',
    title: 'Passport issued by U.S. (USA)',
    usedBy: ['0x03'],
    icon: 'passport',
  },
  {
    ruleId: '0x02',
    rype: 'base',
    title: 'Corporated in U.S. (USA)',
    usedBy: [],
    icon: 'passport',
  },
  {
    ruleId: '0x03',
    rype: 'union',
    title: 'union (G7 individuals)',
    usedBy: [],
    icon: 'passport',
  },
];

const RuleCreation = () => {
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
    <div className={styles.ruleCreation}>
      <div className={styles.header}>The header goes here</div>
      <div className={styles.container}>
        <RuleSearchForm
          rules={rules}
          onInputChange={handleInputChange}
          value={searchValue}
          selectedRules={selectedRules}
          onSelectRule={handleSelectRule}
          onRemoveRule={handleRemoveRule}
        />
      </div>
    </div>
  );
};

export default RuleCreation;
