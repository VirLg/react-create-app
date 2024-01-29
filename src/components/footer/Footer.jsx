import React from 'react';
import { FooterDiv, FooterSocialDiv, FooterSubmitBTN } from './Footer.styled';

import IconButton from '../svg/iconButton/IconButton';
import { ReactComponent as Telegramm } from '../icons/Telegram_(software)-Logo.wine.svg';
import { ReactComponent as Viber } from '../icons/viber-svgrepo-com.svg';
import { ReactComponent as FB } from '../icons/facebook-svgrepo-com.svg';
import { ReactComponent as Inst } from '../icons/icons8-instagram.svg';

const Footer = () => {
  return (
    <div style={{ marginTop: '5px' }}>
      <hr style={{ margin: '0' }} />
      <FooterDiv>
        <ul>
          <li className="titleFont">Contacts :</li>
          <li className="seconadaryFont">040000</li>
          <li className="seconadaryFont">Kyiv</li>
          <li className="seconadaryFont">str Mykoly Zakrevskogo</li>
          <li className="seconadaryFont">phone : +38 068 000 15 15</li>
        </ul>
        <div>
          <p style={{ margin: '0' }} className="titleFont">
            Social links :
          </p>
          <FooterSocialDiv>
            <IconButton>
              <Telegramm width={50} height={50} />
            </IconButton>
            <IconButton>
              <Viber width={50} height={50} />
            </IconButton>
            <IconButton>
              <FB width={50} height={50} />
            </IconButton>
            <IconButton>
              <Inst width={50} height={50} />
            </IconButton>
          </FooterSocialDiv>
        </div>
        <div>
          <p style={{ margin: '0' }} className="titleFont">
            Responce :
          </p>
          <input
            type="text"
            placeholder="Введіть відгук"
            style={{
              height: '24px',
              width: '230px',
              marginRight: '6px',
              borderRadius: '6px',
            }}
          />
          <FooterSubmitBTN>Submit</FooterSubmitBTN>
        </div>
      </FooterDiv>
    </div>
  );
};

export default Footer;
