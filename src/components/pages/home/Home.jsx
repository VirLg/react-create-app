import IconButton from '../../svg/iconButton/IconButton';
import React from 'react';
import { ReactComponent as Telegramm } from '../../icons/Telegram_(software)-Logo.wine.svg';
import { ReactComponent as Viber } from '../../icons/viber-svgrepo-com.svg';
import { ReactComponent as FB } from '../../icons/facebook-svgrepo-com.svg';
import { ReactComponent as Inst } from '../../icons/icons8-instagram.svg';
import { ReactComponent as Conect } from '../../icons/phone.svg';
import { HeroConnectBtn, HeroDiv, MainDiv, SocialDiv } from './Home.styled';
import baner from '../../icons/rental-car.png';
import background from '../../icons/car.avif';
import HeroForm from '../heroForm/HeroForm';
import Questions from '../../questions/Questions';
const Home = () => {
  return (
    <div
      className="container"
      style={{
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '2600px',
        }}
      >
        <SocialDiv>
          <IconButton>
            <Telegramm width={60} height={60} />
          </IconButton>
          <IconButton>
            <Viber width={60} height={60} />
          </IconButton>
          <IconButton>
            <FB width={60} height={60} />
          </IconButton>
          <IconButton>
            <Inst width={60} height={60} />
          </IconButton>
        </SocialDiv>
        <MainDiv>
          <div style={{ display: 'block' }}>
            <HeroForm />
          </div>
          <HeroDiv>
            <img src={baner} alt="" width={1000} height={500} />
          </HeroDiv>
          <HeroConnectBtn className="hero_connect_btn">
            <Conect width={120} height={120} />
          </HeroConnectBtn>
        </MainDiv>
      </div>
      <div>
        <Questions />
      </div>
    </div>
  );
};

export default Home;
