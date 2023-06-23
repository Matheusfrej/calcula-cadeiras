import { PencilSimple, Trash, LockSimple, GraduationCap } from 'phosphor-react'
import { Tooltip } from 'react-tooltip'
import * as S from './styles'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CourseModal } from '../../../../components/CourseModal'
import { DeleteCourseModal } from '../../../../components/DeleteCourseModal'
import { useCourses } from '../../../../contexts/CoursesContext'

interface CourseCardProps {
  id: number
  code: string
  name: string
  mandatory: boolean
  professor: string
  workload: number
}

export function CourseCard({
  id,
  code,
  name,
  mandatory,
  professor,
  workload,
}: CourseCardProps) {
  const { onCourseModalOpen } = useCourses()
  const [isCourseModalOpen, setIsCourseModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)

  function handleCourseModalOpenChange(value: boolean) {
    onCourseModalOpen(value)
    setIsCourseModalOpen(value)
  }

  function handleDeleteModalOpenChange(value: boolean) {
    setIsDeleteModalOpen(value)
  }

  return (
    <S.CourseCardContainer>
      <S.CardHeader>
        <strong>
          {code} - {name}
        </strong>
        <div>
          <Dialog.Root
            open={isCourseModalOpen}
            onOpenChange={handleCourseModalOpenChange}
          >
            <Dialog.Trigger asChild>
              <PencilSimple
                size={24}
                weight="bold"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Editar"
              />
            </Dialog.Trigger>
            <CourseModal purpose="edit" courseId={id} />
          </Dialog.Root>
          <Dialog.Root
            open={isDeleteModalOpen}
            onOpenChange={handleDeleteModalOpenChange}
          >
            <Dialog.Trigger asChild>
              <Trash
                size={24}
                weight="bold"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Apagar"
              />
            </Dialog.Trigger>
            <DeleteCourseModal
              handleDeleteModalOpenChange={handleDeleteModalOpenChange}
              courseId={id}
            />
          </Dialog.Root>
        </div>
      </S.CardHeader>
      <h3>Professor: {professor}</h3>

      <S.CardFooter>
        <strong>{workload}h</strong>
        {mandatory ? (
          <div>
            <span>Obrigatória</span>
            <LockSimple size={20} weight="bold" />
          </div>
        ) : (
          <div>
            <span>Eletiva</span>
            <GraduationCap size={20} weight="bold" />
          </div>
        )}
      </S.CardFooter>
      <Tooltip id="my-tooltip" />
    </S.CourseCardContainer>
  )
}
