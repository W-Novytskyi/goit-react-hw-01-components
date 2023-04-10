import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 100px auto;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 32px;
  margin: 0 0 20px 0;
`;

export const Info = styled.p`
  color: #757575;
  font-weight: 500;
  font-size: 16px;
  margin: 0 0 15px 0;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 15px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const StatLabel = styled.span`
  color: #757575;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StatQuantity = styled.span`
  color: #000000;
  font-weight: 700;
  font-size: 24px;
`;
