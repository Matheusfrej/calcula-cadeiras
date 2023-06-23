import { useCourses } from '../../contexts/CoursesContext'
import * as S from './styles'

export function CoursesData() {
  const { graduation, courses } = useCourses()

  const workloadData = courses.reduce(
    (acc, course) => {
      if (course.type === 'Obrigatória') {
        acc.mandatory += course.workload
        acc.total += course.workload
      } else if (course.type === 'Eletiva') {
        acc.elective += course.workload
        acc.total += course.workload
      }

      return acc
    },
    {
      mandatory: 0,
      elective: 0,
      total: 0,
    },
  )

  return (
    <S.CoursesDataContainer>
      <div>
        <h1>{graduation?.name}</h1>
        <S.CoursesDataCards>
          <S.CoursesDataCard variant="accomplished">
            <span>Obrigatória cumprida</span>
            <strong>{workloadData.mandatory}h</strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard variant="remaining">
            <span>Obrigatória restante</span>
            <strong>
              {graduation !== undefined &&
                graduation.workload.mandatory - workloadData.mandatory}
              {graduation === undefined && 0}h
            </strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard>
            <span>Obrigatória total do curso</span>
            <strong>
              {graduation !== undefined && graduation.workload.mandatory}
              {graduation === undefined && 0}h
            </strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard variant="accomplished">
            <span>Eletiva cumprida</span>
            <strong>{workloadData.elective}h</strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard variant="remaining">
            <span>Eletiva restante</span>
            <strong>
              {graduation !== undefined &&
                graduation.workload.elective - workloadData.elective}
              {graduation === undefined && 0}h
            </strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard>
            <span>Eletiva total do curso</span>
            <strong>
              {graduation !== undefined && graduation.workload.elective}
              {graduation === undefined && 0}h
            </strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard variant="accomplished">
            <span>Carga horária do curso cumprida</span>
            <strong>{workloadData.total}h</strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard variant="remaining">
            <span>Carga horária do curso restante</span>
            <strong>
              {graduation !== undefined &&
                graduation.workload.total - workloadData.total}
              {graduation === undefined && 0}h
            </strong>
          </S.CoursesDataCard>
          <S.CoursesDataCard>
            <span>Carga horária do curso total</span>

            <strong>
              {graduation !== undefined && graduation.workload.total}
              {graduation === undefined && 0}h
            </strong>
          </S.CoursesDataCard>
        </S.CoursesDataCards>
      </div>
    </S.CoursesDataContainer>
  )
}
