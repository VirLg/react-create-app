import styled from '@emotion/styled';

export const AddCarDiv = styled.div`
  width: 600px;
`;
export const AddButton = styled.button`
  height: 48px;
  width: 136px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
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
  &:focus,
  &:hover {
    background-color: blue;
    transform: scale(1.1);
  }
`;
