import { describe, expect, it } from 'vitest'
import { validateLead } from './submitLead'
describe('validateLead',()=>{it('requires a valid email',()=>{expect(validateLead({name:'Rafa',email:'bad'}).valid).toBe(false)});it('accepts valid values',()=>{expect(validateLead({name:'Rafa',email:'rafa@example.com'}).valid).toBe(true)})})
