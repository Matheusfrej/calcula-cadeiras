import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'
import { api } from '../lib/axios'
import { toast } from 'react-toastify'

export interface CourseType {
  id: number
  code: string
  name: string
  professor: string
  type: 'Obrigatória' | 'Eletiva'
  workload: number
}

interface GraduationData {
  name: string
  workload: {
    total: number
    mandatory: number
    elective: number
  }
}

interface CreateCourseInput {
  code: string
  name: string
  professor: string
  type: 'Obrigatória' | 'Eletiva'
  workload: number
}

interface CoursesContextType {
  courses: CourseType[]
  graduation: GraduationData | undefined
  wasCourseModalOpened: boolean
  deleteCourse: (id: number) => Promise<void>
  getCourses: (query: string) => Promise<void>
  onCourseModalOpen: (value: boolean) => void
  showToast: (message: string, didSuccess: boolean) => void
  createCourse: (data: CreateCourseInput) => void
  editCourse: (data: CreateCourseInput, courseId: number) => void
}

export const CoursesContext = createContext({} as CoursesContextType)

interface CoursesContextProviderProps {
  children: ReactNode
}

export function CoursesContextProvider({
  children,
}: CoursesContextProviderProps) {
  const [courses, setCourses] = useState<CourseType[]>([])
  const [graduation, setGraduation] = useState<GraduationData | undefined>()
  const [wasCourseModalOpened, setWasCourseModalOpened] =
    useState<boolean>(false)

  const getCourses = async (query?: string) => {
    const response = await api.get('/courses', {
      params: {
        q: query,
      },
    })
    setCourses(response.data)
  }

  useEffect(() => {
    getCourses()
  }, [])

  const createCourse = async (data: CreateCourseInput) => {
    const { code, name, professor, type, workload } = data

    try {
      const response = await api.post('/courses', {
        code,
        name,
        professor,
        type,
        workload,
      })

      setCourses((state) => {
        return [...state, response.data]
      })
      showToast('Cadeira adicionada com sucesso!', true)
    } catch (error) {
      showToast('Houve um erro ao adicionar uma cadeira', false)
    }
  }

  const editCourse = async (data: CreateCourseInput, courseId: number) => {
    const { code, name, professor, type, workload } = data
    try {
      const response = await api.put(`/courses/${courseId}`, {
        code,
        name,
        professor,
        type,
        workload,
      })

      setCourses((state) => {
        return state.map((course) => {
          if (course.id === courseId) {
            return response.data
          }
          return course
        })
      })
      showToast('Cadeira editada com sucesso!', true)
    } catch (error) {
      showToast('Houve um erro ao editar a cadeira', false)
    }
  }

  const getGraduation = async () => {
    const response = await api.get('/graduation')
    setGraduation(response.data)
  }

  const onCourseModalOpen = (value: boolean) => {
    setWasCourseModalOpened(value)
  }

  useEffect(() => {
    getGraduation()
  }, [])

  const showToast = (message: string, didSuccess: boolean) => {
    if (didSuccess) {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  const deleteCourse = async (id: number) => {
    try {
      await api.delete(`/courses/${id}`)
      setCourses((state) => {
        return state.filter((course) => course.id !== id)
      })
      showToast('Curso apagado com sucesso!', true)
    } catch (error) {
      showToast('Houve um erro ao apagar o curso', false)
    }
  }

  return (
    <CoursesContext.Provider
      value={{
        courses,
        graduation,
        wasCourseModalOpened,
        deleteCourse,
        getCourses,
        onCourseModalOpen,
        showToast,
        createCourse,
        editCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  )
}

export function useCourses(): CoursesContextType {
  const context = useContext(CoursesContext)

  return context
}
