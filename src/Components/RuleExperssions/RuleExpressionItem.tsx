import React from 'react';
import styles from './RulesExpressions.module.scss';
import exclamatPoint from '../../assets/images/exclamat.png'
import { Expression } from '../../models/Expression';

interface RuleExpressionItemProps {
    expression:Expression
    onClick: (expression:Expression) => void
}



function RuleExpressionItem(props:RuleExpressionItemProps) {
    const {
        expression, 
        onClick,
    } = props
    return (
        <button onClick={() => onClick(expression)} className={styles.ruleExpression}>
            <span className={styles.rightContainer}>
                <img src={expression.image} alt="expression" />
                <span>{expression.name}</span>
            </span>
            <span className={styles.leftContainer}>
                <img src={exclamatPoint} alt="exclamatPoint" />
            </span>
        </button>
    );
}

export default RuleExpressionItem;