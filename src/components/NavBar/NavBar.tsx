import React, { FC, useEffect } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../helper/useWindowDimention'
import { NavBorder, NavPadding } from './NavBarStyle'
import { SearchButtonContainer } from './Button'
import SearchComponent from '../Search/Search'
import { LogoStyle } from './Logo'

const Logo = require('../../assets/Logo.png')

const NavBar: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <NavPadding>
      <NavBorder>
        {width <= 600 ? (
          // Mobile View
          <Row>
            <Link to={'/'}>
              <LogoStyle src={Logo} alt={'logo'} />
            </Link>

            <SearchComponent />
          </Row>
        ) : (
          // Web View
          <Row>
            <Col span={12}>
              <Link to={'/'}>
                <LogoStyle src={Logo} alt={'logo'} />
              </Link>
            </Col>
            <Col span={12}>
              <SearchButtonContainer>
                <SearchComponent />
              </SearchButtonContainer>
            </Col>
          </Row>
        )}
      </NavBorder>
    </NavPadding>
  )
}

export default NavBar
