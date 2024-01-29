import styled from '@emotion/styled';

export const FooterDiv = styled.div`
  height: 180px;
  display: flex;
  align-items: baseline;
  margin-top: 15px;
  //   align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const FooterLinkSpan = styled.span`
  color: orange;
  transform: scale(1.3);

  &:focus,
  &:hover {
    color: blue;
    text-color: rgba(52, 112, 255, 1);

    transform: scale(1.3);
  }
`;
export const FooterSocialDiv = styled.div`
  justify-content: center;
  gap: 20px;
  display: flex;
  //   margin-top: 6px;
  //   padding-bottom: 10px;
  //   padding-top: 20px;
  //   background-image: linear-gradient(
  //     rgba(47, 48, 58, 0.8),
  //     rgba(47, 48, 58, 0.8)
  //   );
`;
export const FooterSubmitBTN = styled.button`
  height: 28px;
  width: 136px;
  margin-top: 26px;

  background-color: rgba(52, 112, 255, 1);
  //   border-radius: 5px;
  //   padding-top: 14px;
  //   padding-bottom: 14px;
  //   padding-left: 44px;
  //   padding-right: 44px;
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
