import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0;
`

export const HeaderContent = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    span {
      color: ${(props) => props.theme['blue-300']};
    }
  }

  button {
    height: 50px;
    border: 0;
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
  }
`
