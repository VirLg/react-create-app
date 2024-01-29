import styled from '@emotion/styled';

export const PolicyLink = styled.li`
  textdecoration: none;
  color: orange;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    color: blue;
    text-color: rgba(52, 112, 255, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
