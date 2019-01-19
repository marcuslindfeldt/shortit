import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: none;
  border: 0;
  font-weight: 700;
  color: #000;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 40px;
  font-family: Merriweather, serif;
  transition: transform 50ms ease-in-out;

  :hover,
  :focus {
    outline: 0;
    transform: translateY(-4px) scale(1.1);
  }

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  @media (min-width: 44rem) {
    position: absolute;
    right: 2rem;
    top: 0;
  }
`;

const Button = ({ children, label, ...props }) => (
  <StyledButton aria-label={label} {...props}>
    {children || label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
