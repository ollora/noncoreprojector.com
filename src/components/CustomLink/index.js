import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  if (props.href) {
    return <a href={props.href} target="blank">{props.children}</a>;
  }
  if (props.to) {
    return <Link to={props.to}>{props.children}</Link>;
  }
  return
    <span style={{fontWeight: 200}}>
      {props.children}
    </span>;
};
