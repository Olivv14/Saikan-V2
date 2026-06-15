import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/app/layouts/SiteLayout'
import LandingHomePage from '@/features/landing/LandingHomePage'
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage'

const ContactPage = lazy(() => import('@/pages/ContactPage/ContactPage'))
const DevGalleryPage = lazy(() => import('@/pages/DevGalleryPage/DevGalleryPage'))

export function AppRouter() {
  return (
    <Suspense fallback={<div className="p-8 text-muted">Loading…</div>}>
      <Routes>
        <Route path="/" element={<LandingHomePage />} />
        <Route element={<SiteLayout />}>
          <Route path="/contact" element={<ContactPage />} />
          {import.meta.env.DEV ? <Route path="/dev-gallery" element={<DevGalleryPage />} /> : null}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
