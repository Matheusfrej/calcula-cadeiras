import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { GraduationCap, LockSimple, X } from 'phosphor-react'

interface CourseModalProps {
  purpose: 'add' | 'edit'
}

export function CourseModal({ purpose }: CourseModalProps) {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        {purpose === 'add' && <Dialog.Title>Nova cadeira</Dialog.Title>}
        {purpose === 'edit' && <Dialog.Title>Editar cadeira</Dialog.Title>}
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <form>
          <input type="text" placeholder="Código da cadeira" required />
          <input type="text" placeholder="Nome da cadeira" required />
          <input type="text" placeholder="Professor" required />
          <input type="number" placeholder="Carga Horária" required />

          <S.CourseType>
            <S.CourseTypeButton value="mandatory">
              Obrigatória
              <LockSimple size={20} weight="bold" />
            </S.CourseTypeButton>
            <S.CourseTypeButton value="elective">
              Eletiva
              <GraduationCap size={20} weight="bold" />
            </S.CourseTypeButton>
          </S.CourseType>

          {purpose === 'add' && <button type="submit">Cadastrar</button>}
          {purpose === 'edit' && <button type="submit">Concluir</button>}
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
