import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { GraduationCap, LockSimple, X } from 'phosphor-react'

export function CourseModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova cadeira</Dialog.Title>
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

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
