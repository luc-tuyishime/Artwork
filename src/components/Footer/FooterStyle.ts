import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

export const FooterStyle = styled.footer`
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  margin-top: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.FooterTextColor};
  width: ${(props) => props.theme.pixelsSize.FooterWidth};
  background: ${(props) => props.theme.colors.footerBgColor};
  height: ${(props) => props.theme.colors.LargeSize};
  padding: ${(props) => props.theme.pixelsSize.footerPadding};
  @media ${device.mobileS} {
    width: ${(props) => props.theme.pixelsSize.FooterWidthSM};
  }
  @media ${device.mobileM} {
    width: ${(props) => props.theme.pixelsSize.FooterWidthSM};
  }
  @media ${device.mobileL} {
    width: ${(props) => props.theme.pixelsSize.FooterWidthSM};
  }
  @media ${device.tablet} {
    width: ${(props) => props.theme.pixelsSize.FooterWidth};
  }
  @media ${device.laptop} {
    width: ${(props) => props.theme.pixelsSize.FooterWidth};
  }
  @media ${device.laptopL} {
    width: ${(props) => props.theme.pixelsSize.FooterWidth};
  }
`
