import styled from '@emotion/styled';

export const HeaderDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const LinkSpan = styled.span`
  color: orange;
  transform: scale(1.3);

  &:focus,
  &:hover {
    color: blue;
    text-color: rgba(52, 112, 255, 1);

    transform: scale(1.3);
  }
`;
