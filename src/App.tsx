import { lazy, useEffect, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HistoryRouter } from 'redux-first-history/rr6'
import { Routes, Route } from 'react-router-dom'
import { checkBase, recheckBase, selectBaseLoaded } from './Store/baseSlice'
import BaseLoader from './components/BaseLoader/BaseLoader'
import Header from './components/MainHeader/Header'
import RoutesConstants from './constants/routes.json'
import LoadingState from './components/Elements/LoadingState'
import * as GS from './styles/globalStyles'
import * as global from './constants/globalConstants'
import { useAppDispatch, useAppSelector } from './Store/hooks'
import { selectStorageLabels } from './Store/labelsSlice'
import { BASE_ARRAY } from './constants/baseConstants'
import { history } from './Store/store'
import PageNotFound from './components/PageNotFound/PageNotFound'

const ToDo = lazy(() => import('./components/ToDo/Todo'))
const EmailDetail = lazy(() => import('./components/EmailDetail/EmailDetail'))
const ComposeEmail = lazy(() => import('./components/Compose/ComposeEmail'))
const Inbox = lazy(() => import('./components/Inbox/Inbox'))
const SentEmail = lazy(() => import('./components/Sent/Sent'))
const DraftEmail = lazy(() => import('./components/Draft/DraftEmail'))

const emailFetchSizeLS: string | null = localStorage.getItem('fetchSize')

const App = () => {
  const dispatch = useAppDispatch()
  const baseLoaded = useAppSelector(selectBaseLoaded)
  const storageLabels = useAppSelector(selectStorageLabels)

  useEffect(() => {
    if (!baseLoaded) {
      dispatch(checkBase())
    }
  }, [baseLoaded])

  useEffect(() => {
    if (
      !emailFetchSizeLS ||
      (emailFetchSizeLS &&
        !global.POSSIBLE_FETCH_SIZES.includes(emailFetchSizeLS))
    )
      localStorage.setItem('fetchSize', '20')
  }, [])

  useEffect(() => {
    const showAvatarLS: string | null = localStorage.getItem('showAvatar')

    if (
      !showAvatarLS ||
      (showAvatarLS !== 'true' && showAvatarLS !== 'false')
    ) {
      localStorage.setItem('showAvatar', 'true')
    }
  })

  useEffect(() => {
    if (!baseLoaded && storageLabels.length === BASE_ARRAY.length) {
      dispatch(recheckBase())
    }
  }, [baseLoaded, storageLabels])

  return (
    <HistoryRouter history={history}>
      {!baseLoaded && <BaseLoader />}
      {baseLoaded && (
        <GS.Base>
          <GS.OuterContainer>
            <Header />
          </GS.OuterContainer>

          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route
                path={RoutesConstants.HOME}
                element={
                  <Suspense fallback={<LoadingState />}>
                    <ToDo />
                  </Suspense>
                }
              />
              <Route
                path={RoutesConstants.EMAIL_DETAIL}
                element={
                  <Suspense fallback={<LoadingState />}>
                    <EmailDetail />
                  </Suspense>
                }
              />
              <Route
                path={RoutesConstants.COMPOSE_EMAIL}
                element={
                  <Suspense fallback={<LoadingState />}>
                    <ComposeEmail />
                  </Suspense>
                }
              />
              <Route
                path={RoutesConstants.DRAFTS}
                element={
                  <Suspense fallback={<LoadingState />}>
                    <DraftEmail />
                  </Suspense>
                }
              />
              <Route
                path={RoutesConstants.SENT}
                element={
                  <Suspense fallback={<LoadingState />}>
                    <SentEmail />
                  </Suspense>
                }
              />
              <Route
                path={RoutesConstants.INBOX}
                element={
                  <Suspense fallback={<LoadingState />}>
                    <Inbox />
                  </Suspense>
                }
              />
              <Route
                path={RoutesConstants.WILDCARD}
                element={<PageNotFound />}
              />
            </Routes>
          </AnimatePresence>
        </GS.Base>
      )}
    </HistoryRouter>
  )
}

export default App
