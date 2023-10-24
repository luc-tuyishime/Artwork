import React, { FC, Suspense } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetArtQuery } from 'services/ArtAPI'
import { ReactComponent as BackIcon } from 'assets/BackIcon.svg'
import { Card } from 'components/Arts/Card'
import { TextLongTitle, TextTitle } from 'components/Arts/Text'
import { IMG } from './Image'
import { Label, P, StyledLink, TextArt, Line, TextDetailContainer } from './Text'
import LoadingFallBack from '../common/LoadingFallback'
import { SkeletonContainer, SkeletonSpan } from '../Arts/Skeleton'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import useWindowDimensions from 'helper/useWindowDimention'

const ArtInformation: FC = () => {
  const { width } = useWindowDimensions()
  const { objectNumber } = useParams()
  const { data, isFetching, error } = useGetArtQuery(objectNumber)

  const art = data?.artObject
  const objectType = art?.objectTypes?.map((object: string) => object)

  if (isFetching) {
    return (
      <SkeletonContainer>
        <SkeletonTheme baseColor="#1D1D1D" highlightColor="#23293E">
          <SkeletonSpan>
            <Skeleton inline count={1} height={width <= 400 ? 150 : 550} />
          </SkeletonSpan>
        </SkeletonTheme>
      </SkeletonContainer>
    )
  }

  if (error) {
    return (
      <div>
        <Link to="/">Something has gone wrong - Go back</Link>
      </div>
    )
  }

  return (
    <Suspense fallback={<LoadingFallBack />}>
      <div>
        <StyledLink to={'/'}>
          <P>
            <BackIcon /> Back to the List
          </P>
        </StyledLink>
      </div>
      <Row>
        <Col span={24}>
          <Card>
            <TextTitle>Piero di Cosimo</TextTitle>
            <IMG className="rounded" src={art?.webImage?.url} />
            <TextLongTitle>{art?.longTitle}</TextLongTitle>
          </Card>
        </Col>
      </Row>
      <TextDetailContainer>
        <Label>Title:</Label>
        <TextArt>{art?.title}</TextArt>
        <Line />
      </TextDetailContainer>
      <TextDetailContainer>
        <Label>Artist:</Label>
        <TextArt> {art?.principalMaker} </TextArt>
        <Line />
      </TextDetailContainer>
      <TextDetailContainer>
        <Label>Object Type:</Label>
        <TextArt> {objectType} </TextArt>
        <Line />
      </TextDetailContainer>
      <TextDetailContainer>
        <Label>Measurements:</Label>
        <TextArt> {art?.subTitle} </TextArt>
        <Line />
      </TextDetailContainer>
      <TextDetailContainer>
        <Label>Description:</Label>
        <TextArt> {art?.description} </TextArt>
        <Line />
      </TextDetailContainer>
    </Suspense>
  )
}

export default ArtInformation
