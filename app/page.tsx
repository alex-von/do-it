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
        hello
      </div>
    </main>
  )
}
