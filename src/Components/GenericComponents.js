import styled from 'styled-components';
import Colors from '../Colors/Colors';

export const ButtonDefault = styled.button`
  cursor: pointer;
  background-color: ${Colors.M3SysLightPrimary}; 
  border-radius: 100px;
  padding: 10px 24px;
  color: ${Colors.M3SyslightOnPrimary}; 
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
  margin-bottom: 39px;
`;

export const RegisterButton = styled(ButtonDefault)`
  width: 259px;
`;

export const UserInput = styled.div`
  position: relative;
  margin-bottom: 16px;
  input{
    width: 359px;
    height: 56px;
    background: ${Colors.M3syslightSurfaceariant};
    border-radius: 4px 4px 0px 0px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${Colors.M3SysLightOnSurface};
    padding-left: 20px;
  }
  input:focus + span, input:valid + span {
    top: 20px;
    left: 10px;
    font-size: 12px;
    padding: 0 0px 0px 10px;
  }
  span{
    font-family: 'Roboto';
    position: absolute;
    top: 10px;
    left: 25px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    transition: .4s;
    color: ${Colors.M3SysLightPrimary}; 
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
