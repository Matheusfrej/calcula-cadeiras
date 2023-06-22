import { styled } from 'styled-components'

export const CoursesDataContainer = styled.section`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem auto 0;
    padding: 0 1.5rem;
    max-width: 1120px;
  }
`

interface CoursesDataCardProps {
  variant?: 'accomplished' | 'remaining'
}

export const CoursesDataCard = styled.div<CoursesDataCardProps>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    font-size: 1.5rem;
    color: ${(props) => {
      switch (props.variant) {
        case 'accomplished':
          return props.theme['green-300']
        case 'remaining':
          return props.theme['red-300']
      }
    }};
  }
`
