import { ThemeToggle } from '@/components/ThemeToggle'
import { SignOutButton } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'
import DyanmicHomeLink from './DynamicHomeLink'
import CommandMenu from '@/components/CommandMenu'
import Themer from './(home)/Themer'
import { Toaster } from 'react-hot-toast'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <header className='sticky z-10 backdrop-blur top-0 px-6 h-16 flex justify-between items-center border-b-[1px] shadow-md border-muted-background/30 bg-background/90 '>
        <DyanmicHomeLink />
        <Themer />
        <div className='flex gap-4 items-center'>
          <CommandMenu />
          <ThemeToggle />
          <SignOutButton>
            <LogOutIcon className='cursor-pointer' />
          </SignOutButton>
        </div>
      </header>
      <Toaster />
      <main className='p-8 main-height'>{children}</main>
    </div>
  )
}
