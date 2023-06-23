import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'
import { CoursesContextProvider } from './contexts/CoursesContext'

export function App() {
  return (
    <CoursesContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </CoursesContextProvider>
  )
}
