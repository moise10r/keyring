import React from "react";
import Button from "@mui/material/Button";
import styles from './BaseButton.module.scss';
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  disabled?: boolean;
}

const BaseButton = ({ onClick, name, disabled }: ButtonProps) => {
  return (
      <Button className={styles.createRule} variant="contained" onClick={onClick} disabled={disabled}>
        {name}
      </Button>
  );
}

export default BaseButton;
