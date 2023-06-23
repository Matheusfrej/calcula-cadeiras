import { useForm } from 'react-hook-form'
import * as S from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCourses } from '../../../../contexts/CoursesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { getCourses } = useCourses()

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchCourses = (data: SearchFormInputs) => {
    getCourses(data.query)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchCourses)}>
      <input
        type="text"
        placeholder="Busque por cadeiras"
        {...register('query')}
      />
      <button type="submit">Buscar</button>
    </S.SearchFormContainer>
  )
}
