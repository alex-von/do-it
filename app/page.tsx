'use client'

import Nav from '@/components/nav'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
export default function Home() {
  const [checked, setChecked] = useState(false)

  return (
    <main className='flex flex-col min-h-screen'>
      <Nav />
      <div className='flex flex-col justify-center max-w-5xl mx-auto flex-grow w-full px-4'>
        <Card className='flex items-center bg-primary-foreground gap-4 md:gap-8 p-4 md:p-8 border-[3px] rounded-3xl md:rounded-[30px] '>
          <Checkbox 
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
            className='w-9 md:w-12 h-9 md:h-12 rounded-[13px] md:rounded-[20px] border-[3px]' 
          />
          <div>
            <h3 className={`md:text-xl font-medium ${checked ? 'line-through' : ''}`}>do it</h3>
            <p className='text-sm md:text-lg text-muted-foreground'>Coming Soon</p>
          </div>
        </Card>
      </div>
    </main>
  )
}
