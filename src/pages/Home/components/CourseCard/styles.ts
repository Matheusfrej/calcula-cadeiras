import { styled } from 'styled-components'

export const CourseCardContainer = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-size: 1rem;
    font-weight: normal;
  }
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${(props) => props.theme['gray-500']};
    cursor: pointer;

    &:first-child:hover {
      color: ${(props) => props.theme['blue-300']};
    }
    &:last-child:hover {
      color: ${(props) => props.theme['red-300']};
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: ${(props) => props.theme['green-300']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
