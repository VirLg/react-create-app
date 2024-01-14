import styled from '@emotion/styled';
export const FormDiv = styled.div`
  width: 400px;
  height: 700px;
  border: 2px solid orange;
  margin-top: 70px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const FormBTN = styled.button`
  height: 48px;
  width: 136px;
  margin-top: 26px;
  background-color: rgba(52, 112, 255, 1);
  border-radius: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 44px;
  padding-right: 44px;
  font: Manrope;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin-left: auto;
  margin-right: auto;
  &:focus,
  &:hover {
    background-color: blue;
    transform: scale(1.1);
  }
`;
