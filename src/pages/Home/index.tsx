import { CoursesData } from '../../components/CoursesData'
import { Header } from '../../components/Header'
import { useCourses } from '../../contexts/CoursesContext'
import { CourseCard } from './components/CourseCard'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  const { courses } = useCourses()
  return (
    <div>
      <Header />
      <CoursesData />
      <S.CoursesContainer>
        <SearchForm />

        <S.CourseCardsContainer>
          {courses.map((course) => {
            return (
              <CourseCard
                key={course.id}
                id={course.id}
                code={course.code}
                name={course.name}
                mandatory={course.type === 'Obrigatória'}
                professor={course.professor}
                workload={course.workload}
              />
            )
          })}
        </S.CourseCardsContainer>
      </S.CoursesContainer>
    </div>
  )
}
