import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

export const NavPadding = styled.div`
  padding-top: ${(props) => props.theme.pixelsSize.VerySmallSize};
`

export const NavBorder = styled.div`
  border: 1px solid #ca35f7;
  background: rgba(31, 31, 31, 0.4);
  border-radius: ${(props) => props.theme.pixelsSize.ExtraLargeSize};
  padding: ${(props) => props.theme.pixelsSize.mediumSize};
  box-shadow: ${(props) => props.theme.pixelsSize.BoxShadow} rgba(0, 0, 0, 0.16);
  @media ${device.mobileS} {
    padding: ${(props) => props.theme.pixelsSize.SmallSize};
  }
`

export const BtnStyle = styled.button`
  width: ${(props) => props.theme.pixelsSize.maxWidth};
  height: ${(props) => props.theme.pixelsSize.LargeSize};
  text-shadow: ${(props) => props.theme.pixelsSize.BoxShadow} rgba(0, 0, 0, 0.12);
  color: ${(props) => props.theme.colors.White};
  border: 1px solid ${(props) => props.theme.colors.Razzmatazz};
  border-radius: ${(props) => props.theme.pixelsSize.LargeSize};
  background-color: ${(props) => props.theme.colors.Razzmatazz};
  @media ${device.tablet} {
    width: ${(props) => props.theme.pixelsSize.ExtraExtraSize};
  }
  @media ${device.laptop} {
    width: ${(props) => props.theme.pixelsSize.maxWidth};
  }
  @media ${device.laptopL} {
    width: ${(props) => props.theme.pixelsSize.maxWidth};
  }
  &:hover {
    cursor: pointer;
  }
`
