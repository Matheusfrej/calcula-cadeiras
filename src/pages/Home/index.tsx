import { CoursesData } from '../../components/CoursesData'
import { Header } from '../../components/Header'
import * as S from './styles'

export function Home() {
  return (
    <div>
      <Header />
      <S.HomeContainer>
        <CoursesData />
      </S.HomeContainer>
    </div>
  )
}
