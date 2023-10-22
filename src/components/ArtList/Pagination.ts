import styled from 'styled-components'
import { Pagination } from 'antd'

export const PaginationContainer = styled.div`
  float: right;
  margin-top: ${(props) => props.theme.pixelsSize.NinePixels};
  margin-left: ${(props) => props.theme.pixelsSize.VerySmallSize} !important;
`

export const PaginationStyle = styled(Pagination)`
  margin-right: 17px;
  border-radius: ${(props) => props.theme.pixelsSize.SmallSize};
  :where(.css-dev-only-do-not-override-1km3mtt).ant-pagination .ant-pagination-item a {
    display: block;
    padding: 0 6px;
    color: rgb(245 242 242 / 88%) !important;
    transition: none;
  }
  ,
  :where(.css-dev-only-do-not-override-1km3mtt).ant-pagination .ant-pagination-item-active {
    font-weight: 600;
    background-color: transparent !important;
    border-color: ${(props) => props.theme.colors.Razzmatazz} !important;
  }

  ,
  :where(.css-dev-only-do-not-override-1km3mtt).ant-pagination .ant-pagination-item {
    border-radius: ${(props) => props.theme.pixelsSize.ExtraRadius} !important;
  }
  ,
  .anticon {
    color: ${(props) => props.theme.colors.White} !important;
  }
`
