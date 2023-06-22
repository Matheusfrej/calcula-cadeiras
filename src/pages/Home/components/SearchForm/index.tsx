import * as S from './styles'

export function SearchForm() {
  return (
    <S.SearchFormContainer action="">
      <input type="text" placeholder="Busque por cadeiras" />
      <button type="submit">Buscar</button>
    </S.SearchFormContainer>
  )
}
