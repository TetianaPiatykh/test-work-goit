import styled from 'styled-components';
import boyAvatar from '../../images/group1.svg';
import picture from '../../images/picture21.svg';
import logo from '../../images/vector.svg';
import ellipse from '../../images/ellipse1.svg';
import hansel from '../../images/hansel.svg';

export const UserCardStyled = styled.div`
position: absolute;
width: 380px;
height: 460px;
// left: 863px;
// top: 168px;

background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
margin: auto;
`;

export const LogoStyled = styled.div`
position: absolute;
width: 76px;
height: 22px;
background-repeat: no-repeat;
background-size: contain;
top: 20px;
left: 20px;
background-image: url(${logo});
`;

export const PictureStyled = styled.div`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;

background: url(${picture});
`;

export const CenterStyledDiv = styled.div`
  margin-top: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BoyAvatar = styled.div`
position: relative;
width: 80px;
height: 80px;
// left: 0px;
// top: 0px;
background-repeat: no-repeat;
background-size: contain;
background-position: center;
// background: url(${boyAvatar});
background-image: url(${hansel});
// box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
// border-radius: 13.1749px;
`;

export const CenterLine = styled.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const CenterEllipse = styled.div`
position: relative;
width: 80px;
height: 80px;
left: 0px;
top: 0px;
// background-repeat: no-repeat;
// background-size: contain;
// background-position: center;
border: solid;
// background-image: url(${ellipse});
border-color: #EBD8FF;
background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
// box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;
border-width: 8px;
`;

export const UlStyled = styled.ul`
display: block;
font-size: 20px;
margin-top: 26px;
margin-bottom: 26px;

`;

export const TweetStyled = styled.p`
// position: absolute;
width: 132px;
height: 24px;
left: 124px;
top: 284px;
margin: 26px auto 8px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;
color: #EBD8FF;
`;

export const FollowerStyled = styled.p`
// position: absolute;
width: 214px;
height: 24px;
left: 86px;
top: 324px;
margin: 8px auto 26px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;
`;

export const Button = styled.button`display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;

position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
border: none;
background: ${ p => {
  return p.follow ? '#5CD3A8' : '#EBD8FF'
}};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
margin: 0 auto 36px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
/* identical to box height */

text-transform: uppercase;
flex: none;
order: 0;
flex-grow: 0;
`;