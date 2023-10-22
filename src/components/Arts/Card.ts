import styled from 'styled-components'

export const Card = styled.div`
  &:before {
    content: '';
    position:absolute;
    top: ${(props) => props.theme.pixelsSize.None};
    left: ${(props) => props.theme.pixelsSize.None};
    right: ${(props) => props.theme.pixelsSize.None};
    bottom: ${(props) => props.theme.pixelsSize.None};
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.32%, rgba(0, 0, 0, 0.72) 72.5%);
    z-index: 1;
    border-radius: ${(props) => props.theme.pixelsSize.borderRadius};  
  },
  border-radius: ${(props) => props.theme.pixelsSize.borderRadius};
  padding: ${(props) => props.theme.pixelsSize.None}; 
  margin-right: ${(props) => props.theme.pixelsSize.ExtraSmallSize}; 
  margin-bottom: ${(props) => props.theme.pixelsSize.ExtraSmallSize};
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
`
