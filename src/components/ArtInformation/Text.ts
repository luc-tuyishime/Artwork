import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../styles/BreakPoints'

export const P = styled.p`
  word-wrap: break-word;
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  color: ${(props) => props.theme.colors.Razzmatazz};
  font-size: ${(props) => props.theme.pixelsSize.backText};
  line-height: ${(props) => props.theme.pixelsSize.TextLineHeightLargeSize};
  margin-top: ${(props) => props.theme.pixelsSize.SmallSize};
  margin-bottom: ${(props) => props.theme.pixelsSize.SmallSize};
  @media ${device.mobileS} {
    font-size: ${(props) => props.theme.pixelsSize.mediumSize};
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const TextDetailContainer = styled.div`
  margin-bottom: ${(props) => props.theme.pixelsSize.SmallSize};
`
export const Label = styled.span`
  font-size: ${(props) => props.theme.pixelsSize.labelText};
  color: ${(props) => props.theme.colors.TextColor};
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
`
export const TextArt = styled.p`
  word-wrap: break-word;
  font-size: ${(props) => props.theme.pixelsSize.TextArt};
  color: ${(props) => props.theme.colors.White};
  margin-top: ${(props) => props.theme.pixelsSize.VerySmallSize};
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.fontWeight.extraLarge};
  @media ${device.mobileM} {
    font-size: ${(props) => props.theme.pixelsSize.backText};
  }
`
export const Line = styled.hr`
  color: ${(props) => props.theme.colors.TextColor};
  margin-left: -1px;
  margin-right: ${(props) => props.theme.pixelsSize.SmallSize};
`
