import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 100px auto;
  width: 500px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #757575;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 100%;
  background-color: #f0f0f0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  border: 1px solid #ddd;
`;

export const StatLabel = styled.span`
  color: #757575;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StatPercentage = styled.span`
  color: #000000;
  font-weight: 700;
  font-size: 24px;
`;
