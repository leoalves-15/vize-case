import styled from 'styled-components';
import Colors from '../../Colors/Colors';

export const Table = styled.table`
  border-collapse: collapse; 
  width: 1065px;
  border-bottom: 1px solid ${Colors.M3SysLightPrimaryContainer};
  border-left: 1px solid ${Colors.M3SysLightPrimaryContainer};
  border-right: 1px solid ${Colors.M3SysLightPrimaryContainer};
  @media (max-width: 500px) {
    width: 90vw;
  }
  > tr{
    height: 40px;
  }
  > tr > th{
    height: 50px;
    background-color: ${Colors.M3SysLightPrimaryContainer};
    &:last-child{
      text-align: left;
      padding-left: 13px;
      border-left: 1px solid ${Colors.M3SyslightOnPrimary};
    }
  }
  > tr > td {
    height: 50px;
    padding-left:13px;
    &:first-child{
      width: 186px;
    }
    &:last-child{
      border-left: 1px solid ${Colors.M3SysLightPrimaryContainer};
    }
  }
  `;

export const Title = styled.h1`
  width: 1065px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 64px;
  color: ${Colors.M3ReadOnlyLightBlack};
  @media (max-width: 500px) {
    width: 90vw;
  }
  `;
