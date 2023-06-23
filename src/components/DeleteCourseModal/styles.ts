import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;

  // hackzinho pra centralizar coisas na tela
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;

  /* Mesma coisa que 
  top: 0; 
  bottom: 0;
  left: 0;
  right: 0;
  */
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    height: 58px;
    border: 0;
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    &:first-child {
      background: ${(props) => props.theme['red-500']};

      &:hover {
        background: ${(props) => props.theme['red-700']};
        color: ${(props) => props.theme.white};
        transition: background-color 0.2s, color 0.2s;
      }
    }

    &:last-child {
      color: ${(props) => props.theme['gray-300']};
      background: ${(props) => props.theme['gray-700']};

      &:hover {
        background: ${(props) => props.theme['gray-600']};
        transition: background-color 0.2s;
      }
    }
  }
`
