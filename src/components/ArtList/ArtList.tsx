import React, { useState } from 'react'
import { Col, Row } from 'antd'
import Art from '../Art/Art'
import { BackHomeLink, NoDataFoundText } from '../Arts/Text'
import { Link } from 'react-router-dom'
import { PaginationContainer, PaginationStyle } from './Pagination'
import useWindowDimensions from 'helper/useWindowDimention'

export interface LoadableProps {
  arts: any[]
}

const numEachPage = 8

const ArtList = ({ arts }: LoadableProps) => {
  const { width } = useWindowDimensions()
  const [paginationState, setPanigationState] = useState({
    minValue: 0,
    maxValue: 12,
  })

  const handleChange = (value: number) => {
    if (value <= 1) {
      setPanigationState((prevState) => ({
        ...prevState,
        minValue: 0,
        maxValue: 6,
      }))
    } else {
      setPanigationState((prevState) => ({
        ...prevState,
        minValue: paginationState.maxValue,
        maxValue: value * 10,
      }))
    }

    setPanigationState((prevState) => ({
      ...prevState,
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    }))
  }

  return (
    <div>
      <Row>
        {Object.values(arts || []) &&
          arts.slice(paginationState.minValue, paginationState.maxValue).map((art, i) => {
            if (arts) {
              return (
                <Col key={i} md={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
                  <Art art={art} />
                </Col>
              )
            }
            return (
              <>
                <NoDataFoundText>No Arts found</NoDataFoundText>
                <BackHomeLink>
                  <Link to={'/'}>Back Home</Link>
                </BackHomeLink>
              </>
            )
          })}
      </Row>
      <Row>
        {width <= 600 ? (
          <>
            <PaginationContainer>
              <PaginationStyle
                responsive={true}
                defaultCurrent={1}
                defaultPageSize={numEachPage}
                onChange={handleChange}
                total={90}
              />
            </PaginationContainer>
          </>
        ) : (
          <>
            <Col span={8} />
            <Col span={10} offset={6}>
              <PaginationContainer>
                <PaginationStyle
                  responsive={true}
                  defaultCurrent={1}
                  defaultPageSize={numEachPage}
                  onChange={handleChange}
                  total={90}
                />
              </PaginationContainer>
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}

export default ArtList
