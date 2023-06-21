import * as S from './styles'

export function CoursesData() {
  return (
    <S.CoursesDataContainer>
      <div>
        <S.CoursesDataCard variant="accomplished">
          <span>Carga horária obrigatória cumprida</span>
          <strong>100h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="remaining">
          <span>Carga horária obrigatória restante</span>
          <strong>20h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard>
          <span>Carga horária obrigatória total</span>
          <strong>120h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="accomplished">
          <span>Carga horária eletiva cumprida</span>
          <strong>30h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="remaining">
          <span>Carga horária eletiva restante</span>
          <strong>10h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard>
          <span>Carga horária eletiva total</span>
          <strong>40h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="accomplished">
          <span>Carga horária do curso cumprida</span>
          <strong>130h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="remaining">
          <span>Carga horária do curso restante</span>
          <strong>30h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard>
          <span>Carga horária do curso total</span>
          <strong>160h</strong>
        </S.CoursesDataCard>
      </div>
    </S.CoursesDataContainer>
  )
}
