import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { colorBlack, ms, spacingBase } from './variables';

const CenterLayout = styled.section`
  height: 100vh;
  width: 100vw;
  padding: ${spacingBase};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoHeading = styled.h1`
  font-weight: 700;
  color: ${colorBlack};
  font-size: ${ms(5)};
  margin: 0;
  font-family: Merriweather, serif;
`;

const InfoDescription = styled.p`
  margin: 0;
  font-weight: 500;
  color: ${colorBlack};
  font-size: ${ms(1)};
  font-family: Merriweather, serif;
`;

const InfoView = ({ heading, description }) => (
  <CenterLayout>
    <InfoHeading>{heading}</InfoHeading>
    {description && <InfoDescription>{description}</InfoDescription>}
  </CenterLayout>
);

InfoView.defaultProps = {
  description: undefined,
};

InfoView.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.node,
};

export default InfoView;
