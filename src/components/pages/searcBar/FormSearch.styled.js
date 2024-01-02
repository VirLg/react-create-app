import styled from '@emotion/styled';
export const GallarySearchDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 859px;
  height: 74px;
  //   align-items: start;

  margin-left: auto;
  margin-right: auto;
`;
export const GallaryContainerDiv = styled.div`
  // display: flex;
  // justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 29px;
  padding-left: 128px;
    padding-right: 128px;
}
`;
export const GallarySearchInput = styled.input`
  height: 42px;
  width: 132px;
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  margin-top: 8px;
  border-radius: 14px;
  // padding-top: 14px;
  // padding-bottom: 14px;
  padding-left: 24px;
  background-color: rgba(247, 247, 251, 1);
`;
export const GallarySearchSelect = styled.select`
  height: 48px;

  display: flex;
  flex-direction: column;
  margin-right: 18px;
  margin-top: 8px;
  border-radius: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  background-color: rgba(247, 247, 251, 1);
`;
export const GallarySearchButton = styled.button`
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
`;
