import { CoursesData } from '../../components/CoursesData'
import { Header } from '../../components/Header'
import { CourseCard } from './components/CourseCard'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div>
      <Header />
      <CoursesData />
      <S.CoursesContainer>
        <SearchForm />

        <S.CourseCardsContainer>
          {array.map((_, idx) => {
            return (
              <CourseCard
                key={idx}
                code="IF688"
                name="Teoria e Implementação de Linguagens Computacionais"
                mandatory={idx % 2 === 0}
                professor="Henrique Rebelo"
                workload={75}
              />
            )
          })}
        </S.CourseCardsContainer>
      </S.CoursesContainer>
    </div>
  )
}
