import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

export const IMG = styled.img`
  border-radius: ${(props) => props.theme.pixelsSize.borderRadius} !important;
  height: ${(props) => props.theme.pixelsSize.ArtMobileHeight};
  @media ${device.tablet} {
    height: ${(props) => props.theme.pixelsSize.ArtWebHeight};
  }
  @media ${device.laptop} {
    height: ${(props) => props.theme.pixelsSize.ArtWebHeight};
  }
  @media ${device.laptopL} {
    height: ${(props) => props.theme.pixelsSize.ArtWebHeight};
  }
  @media ${device.desktop} {
    height: ${(props) => props.theme.pixelsSize.ArtWebHeight};
  }
`
