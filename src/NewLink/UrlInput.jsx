import React from 'react';
import styled from 'styled-components/macro';

import { colorDarkGrey, colorBlack, spacingXXL, spacingSmall } from '../variables';

const StyledInput = styled.input`
  font-family: Merriweather, serif;
  appearance: none;
  box-shadow: none;
  outline: 0;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid ${colorBlack};
  background: transparent;
  height: ${spacingXXL};
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
`;

const UrlInput = React.forwardRef((props, ref) => <StyledInput ref={ref} {...props} />);

export default UrlInput;
