import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 100px auto;
  padding: 0;
  width: 500px;
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  width: 300px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
`;

export const Avatar = styled.img`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  color: #000000;
  font-weight: 700;
  font-size: 32px;
  margin-left: 20px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 20px;
  //   background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
