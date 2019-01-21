import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { colorBlack, ms, spacingBase, spacingXL } from '../variables';

const StyledButton = styled.button`
  background: none;
  border: 0;
  font-weight: 700;
  color: ${colorBlack};
  margin-top: ${spacingBase};
  cursor: pointer;
  font-size: ${ms(5)};
  font-family: Merriweather, serif;
  transition: transform 50ms ease-in-out;

  :hover,
  :focus {
    outline: 0;
    transform: scale(1.1);
  }

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  @media (min-width: 44rem) {
    margin: 0;
    position: absolute;
    right: ${spacingXL};
    top: 0;
  }
`;

const SubmitButton = ({ children, label, ...props }) => (
  <StyledButton aria-label={label} {...props}>
    {children || label}
  </StyledButton>
);

SubmitButton.defaultProps = {
  children: undefined,
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default SubmitButton;
