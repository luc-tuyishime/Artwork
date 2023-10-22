import styled from 'styled-components'

export const SkeletonSpan = styled.div`
  line-height: ${(props) => props.theme.pixelsSize.mediumSize};
  margin-bottom: 0.5rem;
`

export const SkeletonContainer = styled.div`
  text-align: center;
  align-items: center;
  margin-top: ${(props) => props.theme.pixelsSize.SmallSize};
`
