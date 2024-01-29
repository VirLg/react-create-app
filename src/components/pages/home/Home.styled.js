import styled from '@emotion/styled';

export const SocialDiv = styled.div`
  justify-content: center;
  gap: 120px;
  display: flex;
  padding-bottom: 10px;
  padding-top: 20px;
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.8),
    rgba(47, 48, 58, 0.8)
  );
`;
export const MainDiv = styled.div`
  position: relative;
  display: flex;
  height: 1200px;
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.8),
    rgba(47, 48, 58, 0.8)
  );
  background-repeat: no-repeat;
`;
export const HeroDiv = styled.div`
  margin-top: 120px;
`;
export const HeroConnectBtn = styled.button`
  position: absolute;
  bottom: 200px;
  right: 200px;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  font: Manrope;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  border-radius: 45%;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.5);
    background-color: red;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
