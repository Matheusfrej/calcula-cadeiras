import { createContext, ReactNode, useContext } from 'react'

interface CoursesContextType {}

export const CoursesContext = createContext({} as CoursesContextType)

interface CoursesContextProviderProps {
  children: ReactNode
}

export function CoursesContextProvider({
  children,
}: CoursesContextProviderProps) {
  return (
    <CoursesContext.Provider value={{}}>{children}</CoursesContext.Provider>
  )
}

export function useCourses(): CoursesContextType {
  const context = useContext(CoursesContext)

  return context
}
