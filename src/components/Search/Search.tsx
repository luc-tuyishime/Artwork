import React, { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { InputContainer, InputNav, InputNavWeb } from './Input'
import useWindowDimensions from '../../helper/useWindowDimention'
import { searchArts } from '../../features/Art'
import Button from '../common/Button'
import { ButtonContainer } from '../NavBar/Button'

const SearchComponent: FC = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState<string>('')
  const { width } = useWindowDimensions()

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const submitQuery = () => {
    dispatch(searchArts(query))
    setQuery('')
  }

  return (
    <>
      <InputContainer>
        {width <= 600 ? (
          <InputNav
            value={query}
            onChange={changeHandler}
            placeholder="Please type in your search"
          />
        ) : (
          <InputNavWeb
            value={query}
            onChange={changeHandler}
            placeholder="Please type in your search"
          />
        )}
      </InputContainer>
      <ButtonContainer>
        <Button onClick={submitQuery}>Search</Button>
      </ButtonContainer>
    </>
  )
}

export default SearchComponent
