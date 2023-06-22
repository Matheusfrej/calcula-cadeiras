import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from 'phosphor-react'

export function CourseModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova cadeira</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
      </S.Content>
    </Dialog.Portal>
  )
}
