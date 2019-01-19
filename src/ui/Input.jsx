import React from 'react';
import styled from 'styled-components/macro';
import { colorDarkGrey, colorLust, colorLava, spacingXxlarge, spacingSmall } from './variables';

const StyledInput = styled.input`
  font-family: Merriweather, serif;
  appearance: none;
  box-shadow: none;
  outline: 0;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid #000;
  background: transparent;
  height: ${spacingXxlarge};
  padding: 0 ${spacingSmall};
  display: inline-block;
  width: 100%;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  color: ${colorDarkGrey};
  font-size: 100%;

  @media (min-width: 44rem) {
    padding-right: 13rem;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  &[data-has-error='true'] {
    border-color: ${colorLust};
    outline: 4px solid rgba(255, 0, 0, 0.2);
    outline-offset: 0;
  }

  &[data-has-error='true']:hover,
  &[data-has-error='true']:focus {
    border-color: ${colorLava};
    outline: 4px solid rgba(255, 0, 0, 0.3);
  }
`;

const Input = React.forwardRef((props, ref) => <StyledInput ref={ref} {...props} />);

export default Input;
