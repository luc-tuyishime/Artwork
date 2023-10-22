import React, { FC, Suspense } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { searchArts } from '../../features/Art'
import { RootState } from '../../app/store'
import { ArtText, P } from './Text'
import ArtList from '../ArtList/ArtList'
import { SkeletonContainer, SkeletonSpan } from './Skeleton'
import LoadingFallBack from '../common/LoadingFallback'
import { useGetAndSearchArtsQuery } from '../../services/ArtAPI'
import useWindowDimensions from '../../helper/useWindowDimention'
import Button from '../common/Button'
import { BtnContainer } from './Button'

const Arts: FC = () => {
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()
  const { searchQuery } = useSelector((state: RootState) => state.Art)

  const { data, isFetching } = useGetAndSearchArtsQuery({ searchQuery })

  const backHome = () => {
    dispatch(searchArts(''))
  }

  return isFetching ? (
    <SkeletonContainer>
      <SkeletonTheme baseColor="#1D1D1D" highlightColor="#23293E">
        <SkeletonSpan>
          <Skeleton
            inline
            count={12}
            width={width <= 400 ? 250 : 450}
            height={width <= 400 ? 250 : 350}
          />
        </SkeletonSpan>
      </SkeletonTheme>
    </SkeletonContainer>
  ) : (
    <Suspense fallback={<LoadingFallBack />}>
      <div>
        {searchQuery ? (
          <BtnContainer>
            <P>
              Found <ArtText>{data?.artObjects.length}</ArtText>{' '}
              {data?.artObjects.length == 0 ? 'result' : 'results'} for:{' '}
              <ArtText>{searchQuery}</ArtText>
            </P>
            <Button onClick={backHome}>Back Home</Button>
          </BtnContainer>
        ) : (
          <P>All artwork</P>
        )}
      </div>
      <ArtList arts={data?.artObjects} />
    </Suspense>
  )
}

export default Arts
