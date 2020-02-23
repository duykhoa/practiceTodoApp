import * as React from 'react';
import Link from './Link';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Link text="Completed"></Link>
      <Link text="Active"></Link>
      <Link text="All"></Link>
    </div>
  );
};

export default Footer;
