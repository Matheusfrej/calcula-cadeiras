import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
`

export const CoursesContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
`

export const CourseCardsContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  gap: 1.5rem;
  align-items: center;
`
