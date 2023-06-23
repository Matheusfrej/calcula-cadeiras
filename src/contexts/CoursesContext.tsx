import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

interface CourseType {
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

interface CoursesContextType {
  courses: CourseType[]
  graduation: GraduationData | undefined
  deleteCourse: (id: number) => void
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

  useEffect(() => {
    const getCourses = async () => {
      const response = await api.get('/courses')
      setCourses(response.data)
    }

    getCourses()
  }, [])

  useEffect(() => {
    const getGraduation = async () => {
      const response = await api.get('/graduation')
      setGraduation(response.data)
      console.log(response.data)
    }

    getGraduation()
  }, [])

  const deleteCourse = async (id: number) => {
    await api.delete(`/courses/${id}`)
    setCourses((state) => {
      return state.filter((course) => course.id !== id)
    })
  }

  return (
    <CoursesContext.Provider value={{ courses, graduation, deleteCourse }}>
      {children}
    </CoursesContext.Provider>
  )
}

export function useCourses(): CoursesContextType {
  const context = useContext(CoursesContext)

  return context
}
