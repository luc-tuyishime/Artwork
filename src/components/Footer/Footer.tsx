import React, { FC } from 'react'
import { FooterStyle } from './FooterStyle'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useGetAndSearchArtsQuery } from '../../services/ArtAPI'

const Footer: FC = () => {
  const { searchQuery } = useSelector((state: RootState) => state.Art)
  const { data } = useGetAndSearchArtsQuery({ searchQuery })
  return <>{data?.artObjects?.length !== 0 && <FooterStyle>Art API</FooterStyle>}</>
}

export default Footer
