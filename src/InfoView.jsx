import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const CenterLayout = styled.section`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoHeading = styled.h1`
  font-weight: 700;
  color: #000;
  font-size: 40px;
  margin: 0;
  font-family: Merriweather, serif;
`;

const InfoDescription = styled.p`
  margin: 0;
  font-weight: 500;
  color: #000;
  font-size: 20px;
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
