import React from 'react';
import styles from  './RulesExpressions.module.scss'
import RuleExpressionItem from './RuleExpressionItem';
import { Expression } from '../../models/Expression';

interface RuleEpressionLIstProps {
    expressions: Array<any>;
    onClick:(expression:Expression) => void;
}

function RuleEpressionLIst(props:RuleEpressionLIstProps) {
    const {expressions, onClick} = props 
    return (
        <div className={styles.expressionListMainContainer}>
            <h3 className={styles.expressionTitle}>Which type of rule do you want to create?</h3>
        
            <ul className={styles.expressionList}>
                {
                    expressions.map((expression:Expression)=>(
                        <li key={expression.id}><RuleExpressionItem onClick={onClick} expression={expression}/></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default RuleEpressionLIst;