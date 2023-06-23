import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { GraduationCap, LockSimple, X } from 'phosphor-react'
import * as z from 'zod'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { CourseType, useCourses } from '../../contexts/CoursesContext'

const courseFormSchema = z.object({
  code: z.string(),
  name: z.string(),
  professor: z.string(),
  type: z.enum(['Obrigatória', 'Eletiva']),
  workload: z.number(),
})

type CourseFormInputs = z.infer<typeof courseFormSchema>

interface CourseModalProps {
  purpose: 'add' | 'edit'
  courseId?: number
}

export function CourseModal({ purpose, courseId }: CourseModalProps) {
  const { wasCourseModalOpened } = useCourses()

  const { control, register, handleSubmit, setValue } =
    useForm<CourseFormInputs>({
      resolver: zodResolver(courseFormSchema),
    })

  const [course, setCourse] = useState<CourseType | undefined>()

  const handleCourseSubmit = (data: CourseFormInputs) => {
    console.log(data)
  }

  const getCourseById = async (id: number) => {
    if (purpose === 'edit') {
      const currentCourse = await api.get(`/courses/${id}`)
      if (course !== undefined) {
        setValue('code', course.code)
        setValue('name', course.name)
        setValue('professor', course.professor)
        setValue('workload', course.workload)
        setValue('type', course.type)
      } else {
        setValue('code', currentCourse.data.code)
        setValue('name', currentCourse.data.name)
        setValue('professor', currentCourse.data.professor)
        setValue('workload', currentCourse.data.workload)
        setValue('type', currentCourse.data.type)
      }
      setCourse(currentCourse.data)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (courseId !== undefined) {
      getCourseById(courseId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wasCourseModalOpened])

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>
          {purpose === 'add' ? 'Nova' : 'Editar'} Cadeira
        </Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <form onSubmit={handleSubmit(handleCourseSubmit)}>
          <input
            type="text"
            placeholder="Código da cadeira"
            required
            {...register('code')}
          />
          <input
            type="text"
            placeholder="Nome da cadeira"
            required
            {...register('name')}
          />
          <input
            type="text"
            placeholder="Professor"
            required
            {...register('professor')}
          />
          <input
            type="number"
            placeholder="Carga Horária"
            required
            {...register('workload', { valueAsNumber: true })}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <S.CourseType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <S.CourseTypeButton value="Obrigatória">
                    Obrigatória
                    <LockSimple size={20} weight="bold" />
                  </S.CourseTypeButton>
                  <S.CourseTypeButton value="Eletiva">
                    Eletiva
                    <GraduationCap size={20} weight="bold" />
                  </S.CourseTypeButton>
                </S.CourseType>
              )
            }}
          />

          <button type="submit">
            {purpose === 'add' ? 'Cadastrar' : 'Concluir'}
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
