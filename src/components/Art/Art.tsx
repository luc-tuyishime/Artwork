import React from 'react'
import { Link } from 'react-router-dom'
import { TextLongTitle, TextTitle } from 'components/Arts/Text'
import { IMG } from 'components/Arts/Logo'
import { Card } from 'components/Arts/Card'

interface LoadableProps {
  art: any
}

const Art = ({ art }: LoadableProps) => {
  return (
    <Link to={`/art/${art.objectNumber}`}>
      <Card>
        <TextTitle>{art.principalOrFirstMaker}</TextTitle>
        <IMG className="rounded" src={art.webImage.url} />
        <TextLongTitle>{art.title}</TextLongTitle>
      </Card>
    </Link>
  )
}

export default Art
