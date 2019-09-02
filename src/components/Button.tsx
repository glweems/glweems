import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean;
}

const Button = (props: Props) => {
  const { children } = props;
  return (
    <button type="button" className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
