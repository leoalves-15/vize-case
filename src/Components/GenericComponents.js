import styled from 'styled-components';
import Colors from '../Colors/Colors';

export const ButtonDefault = styled.button`
  background-color: ${Colors.M3SysLightPrimary}; 
  border-radius: 100px;
  padding: 10px 24px;
  color: ${Colors.White}; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;
  border: none;
`;

export const LoginButton = styled(ButtonDefault)`
  width: 315px;
`;
export const RegisterButton = styled(ButtonDefault)`
  width: 259px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%
`;
