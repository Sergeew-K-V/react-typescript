import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useNavigate()
  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()

    history('/')
  }
  return (
    <>
      <h1>О нас</h1>
      <p>По всем вопросам писать на sergeew_k@mail.ru</p>
      <button className='btn' onClick={handleSubmit}>
        На главную
      </button>
    </>
  )
}
