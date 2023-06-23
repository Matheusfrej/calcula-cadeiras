import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from 'phosphor-react'

interface DeleteCourseModalProps {
  handleDeleteModalOpenChange: (value: boolean) => void
}

export function DeleteCourseModal({
  handleDeleteModalOpenChange,
}: DeleteCourseModalProps) {
  const onHandleDeleteModalOpenChange = () => {
    handleDeleteModalOpenChange(false)
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.Title>Tem certeza que deseja apagar essa cadeira?</S.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <S.Buttons>
          <button onClick={onHandleDeleteModalOpenChange}>Apagar</button>
          <button onClick={onHandleDeleteModalOpenChange}>Cancelar</button>
        </S.Buttons>
      </S.Content>
    </Dialog.Portal>
  )
}
