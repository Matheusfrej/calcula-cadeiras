import * as S from './styles'

export function CoursesData() {
  return (
    <S.CoursesDataContainer>
      <div>
        <S.CoursesDataCard variant="accomplished">
          <span>Obrigatória cumprida</span>
          <strong>100h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="remaining">
          <span>Obrigatória restante</span>
          <strong>20h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard>
          <span>Obrigatória total</span>
          <strong>120h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="accomplished">
          <span>Eletiva cumprida</span>
          <strong>30h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard variant="remaining">
          <span>Eletiva restante</span>
          <strong>10h</strong>
        </S.CoursesDataCard>
        <S.CoursesDataCard>
          <span>Eletiva total</span>
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
