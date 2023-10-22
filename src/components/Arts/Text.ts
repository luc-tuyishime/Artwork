import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

export const TextTitle = styled.span`
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  z-index: 100;
  background: rgba(29, 29, 29, 0.5);
  border-radius: 0 8px;
  padding: ${(props) => props.theme.pixelsSize.TextTopRightPadding};
  position: absolute;
  color: ${(props) => props.theme.colors.TextTitleColor};
  font-size: ${(props) => props.theme.pixelsSize.ExtraExtraSmallSize};
  right: ${(props) => props.theme.pixelsSize.None};
  top: ${(props) => props.theme.pixelsSize.None};
`

export const TextLongTitle = styled.p`
  word-wrap: break-word;
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  z-index: 100;
  position: absolute;
  color: ${(props) => props.theme.colors.TextColor};
  font-size: ${(props) => props.theme.pixelsSize.mediumSize};
  left: ${(props) => props.theme.pixelsSize.None};
  bottom: ${(props) => props.theme.pixelsSize.None};
  align-self: flex-end;
  margin-left: ${(props) => props.theme.pixelsSize.VerySmallSize};
  margin-right: ${(props) => props.theme.pixelsSize.VerySmallSize};
`

export const P = styled.p`
  word-wrap: break-word;
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  color: ${(props) => props.theme.colors.TextColor};
  font-size: ${(props) => props.theme.pixelsSize.TextLargeSize};
  line-height: ${(props) => props.theme.pixelsSize.TextLineHeightLargeSize};
  margin-top: ${(props) => props.theme.pixelsSize.SmallSize};
  margin-bottom: ${(props) => props.theme.pixelsSize.SmallSize};
  @media ${device.mobileS} {
    font-size: ${(props) => props.theme.pixelsSize.mediumSize};
  }
`

export const NoDataFoundText = styled.p`
  word-wrap: break-word;
  text-align: center;
  font-size: ${(props) => props.theme.pixelsSize.TextLargeSize};
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.White};
`

export const BackHomeLink = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.pixelsSize.TextLargeSize};
  margin-top: 50px;
`

export const ArtText = styled.span`
  color: ${(props) => props.theme.colors.TextTitleColor};
`
