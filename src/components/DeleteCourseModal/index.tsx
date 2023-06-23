import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from 'phosphor-react'
import { useCourses } from '../../contexts/CoursesContext'

interface DeleteCourseModalProps {
  handleDeleteModalOpenChange: (value: boolean) => void
  courseId: number
}

export function DeleteCourseModal({
  handleDeleteModalOpenChange,
  courseId,
}: DeleteCourseModalProps) {
  const { deleteCourse } = useCourses()

  const onHandleDeleteModalOpenChange = (toDelete: boolean) => {
    if (toDelete) deleteCourse(courseId)
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
          <button onClick={() => onHandleDeleteModalOpenChange(true)}>
            Apagar
          </button>
          <button onClick={() => onHandleDeleteModalOpenChange(false)}>
            Cancelar
          </button>
        </S.Buttons>
      </S.Content>
    </Dialog.Portal>
  )
}
