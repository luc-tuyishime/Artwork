import styled from 'styled-components'
import { device } from 'styles/BreakPoints'

export const InputNavWeb = styled.input`
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  border-radius: ${(props) => props.theme.pixelsSize.VeryLargeSize};
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: ${(props) => props.theme.colors.White};
  margin-left: 30px;
  width: ${(props) => props.theme.pixelsSize.VeryLargeSize};
  height: ${(props) => props.theme.pixelsSize.LargeSize};
  text-indent: ${(props) => props.theme.pixelsSize.VerySmallSize};
  @media ${device.tablet} {
    width: 210px;
  }
  @media ${device.laptop} {
    width: 450px;
  }
  @media ${device.laptopL} {
    width: 450px;
  }
`

export const InputNav = styled.input`
  border-radius: ${(props) => props.theme.pixelsSize.VeryLargeSize};
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: ${(props) => props.theme.colors.White};
  width: ${(props) => props.theme.pixelsSize.VeryLargeSize};
  height: ${(props) => props.theme.pixelsSize.LargeSize};
  text-indent: ${(props) => props.theme.pixelsSize.VerySmallSize};
  @media ${device.mobileS} {
    width: 230px;
    margin-top: ${(props) => props.theme.pixelsSize.VerySmallSize};
    margin-bottom: ${(props) => props.theme.pixelsSize.VerySmallSize};
  }
`

export const InputContainer = styled.div`
  display: table-cell;
  width: ${(props) => props.theme.pixelsSize.FullSize};
  @media ${device.mobileS} {
    padding-left: ${(props) => props.theme.pixelsSize.None};
  }
`
