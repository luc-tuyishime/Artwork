import React, { lazy, Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { NavBar, Footer } from './'
import 'react-loading-skeleton/dist/skeleton.css'
import 'antd/dist/reset.css'
import Global from '../styles/global'
import { theme } from '../styles/theme'

const Arts = lazy(() => import('../components/Arts/Arts'))
const ArtInformation = lazy(() => import('../components/ArtInformation/ArtInformation'))

function App() {
  return (
    <div>
      <Suspense fallback={<p>loading....</p>}>
        <ThemeProvider theme={theme}>
          <Global />
          <NavBar />
          <Routes>
            <Route path="/" element={<Arts />} />
            <Route path="/art/:objectNumber" element={<ArtInformation />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Suspense>
    </div>
  )
}

export default App
