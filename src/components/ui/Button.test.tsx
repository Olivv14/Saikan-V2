import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'
describe('Button',()=>{it('renders an internal link',()=>{render(<MemoryRouter><Button href='/contact'>Book</Button></MemoryRouter>);expect(screen.getByRole('link',{name:'Book'})).toHaveAttribute('href','/contact')});it('renders a disabled native button',()=>{render(<Button disabled>Submit</Button>);expect(screen.getByRole('button',{name:'Submit'})).toBeDisabled()})})
