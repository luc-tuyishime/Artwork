import React from 'react'
import { Link } from 'react-router-dom'
import { TextLongTitle, TextTitle } from '../Arts/Text'
import { IMG } from '../Arts/Logo'
import { Card } from '../Arts/Card'
import { type } from 'os'

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
