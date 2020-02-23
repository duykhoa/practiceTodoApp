import * as React from 'react';

interface ILinkProps {
  text: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function Link ({ text, onClick }: ILinkProps) {
  return (
    <a href="/#" style={{ padding: "0 3px" }} onClick={onClick}>{ text }</a>
  );
}
