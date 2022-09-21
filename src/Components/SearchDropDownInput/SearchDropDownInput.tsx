import SearchIcon from '@mui/icons-material/Search';
import Collapse from '@mui/material/Collapse';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import DropDownList from './DropDownList';

import styles from './SearchDropDownInput.module.scss';

interface SearchDropDownInputProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  rules: Array<any>;
  onSelectRule: (rule: any) => void;
  selectedRules: Array<any>;
}

const SearchDropDownInput = (props: SearchDropDownInputProps) => {
  const { onInputChange, value, rules, onSelectRule } = props;
  const [inputFocused, setInputFocused] = useState(false);
  const optionsWrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsWrapperRef]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsWrapperRef.current &&
      !optionsWrapperRef.current.contains(event.target as Node)
    ) {
      setInputFocused(false);
    }
  };

  return (
    <div className={styles.searchDropDownInput}>
      <div className={styles.inputInfoRwapper}>
        <div className={styles.iconWrapper}>
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.inputWrapper}>
          <input
            onChange={onInputChange}
            name='search'
            value={value}
            type='text'
            placeholder='Search'
            className={styles.input}
            onFocus={() => setInputFocused(true)}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={styles.dropDownListWrapper} ref={optionsWrapperRef}>
        <Collapse in={inputFocused}>
          <DropDownList onSelectRule={onSelectRule} rules={rules} />
        </Collapse>
      </div>
    </div>
  );
};

export default SearchDropDownInput;
