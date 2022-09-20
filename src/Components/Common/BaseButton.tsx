import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  disabled?: boolean;
  className: any
}

const BaseButton = ({ onClick, name, disabled, className }: ButtonProps) => {
  return (
    <div>
      <Button className={className} variant="contained" onClick={onClick} disabled={disabled}>
        {name}
      </Button>
    </div>
  );
}

export default BaseButton;
