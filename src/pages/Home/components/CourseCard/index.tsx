import { PencilSimple, Trash, LockSimple, GraduationCap } from 'phosphor-react'
import { Tooltip } from 'react-tooltip'
import * as S from './styles'

interface CourseCardProps {
  code: string
  name: string
  mandatory: boolean
  professor: string
  workload: number
}

export function CourseCard({
  code,
  name,
  mandatory,
  professor,
  workload,
}: CourseCardProps) {
  return (
    <S.CourseCardContainer>
      <S.CardHeader>
        <strong>
          {code} - {name}
        </strong>
        <div>
          <PencilSimple
            size={24}
            weight="bold"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Editar"
          />
          <Trash
            size={24}
            weight="bold"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Apagar"
          />
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
