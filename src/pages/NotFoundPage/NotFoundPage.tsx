import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/Button'
export default function NotFoundPage(){return <section className='grid min-h-[calc(100svh-4rem)] place-items-center py-20'><PageContainer className='text-center'><p className='text-sm uppercase tracking-[.3em] text-muted'>404</p><h1 className='mt-4 text-5xl font-semibold tracking-[-.06em]'>Page not found.</h1><Button href='/' className='mt-8'>Back to home</Button></PageContainer></section>}
