import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { CourseModal } from '../CourseModal'

export function Header() {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState<boolean>(false)

  function handleTransactionModalOpenChange(value: boolean) {
    setIsCourseModalOpen(value)
  }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <h2>
          Calcul<span>@</span>
        </h2>
        <Dialog.Root
          open={isCourseModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <button>Adicionar Cadeira</button>
          </Dialog.Trigger>

          <CourseModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
