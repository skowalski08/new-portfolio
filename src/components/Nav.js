import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
        <ul>
          <li>
            <AnchorLink to="/#about">About</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#projects">Projects</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#work">Work Experience</AnchorLink>
          </li>
        </ul>
    </nav>
  );
}
