import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: right;
  border: 2px solid blue;
  ':hover': {
    background: green;
  }
`;
const Title = styled.h1`
  font-size: 5rem;
  color: blue;
  padding: 0px;
  margin: 0px;
  display: inline;
  font-family: Nunito;
  font-weight: bold;
  background: red;
`;

const MyComponent = () => {
  return (
    <>
      <Section>
        <Title>my title</Title>
      </Section>
    </>
  );
};

export default MyComponent;
