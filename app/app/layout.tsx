import { ThemeToggle } from '@/components/ThemeToggle'
import { SignOutButton } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'
import DyanmicHomeLink from './DynamicHomeLink'
import CommandMenu from '@/components/CommandMenu'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <header className='sticky z-10 backdrop-blur top-0 px-6 py-2.5 flex justify-between items-center border-b-[1px] shadow-md border-neutral-500/30 bg-neutral-200/90 dark:bg-neutral-950/90 '>
        <DyanmicHomeLink />
        <div className='flex gap-4 items-center'>
          <CommandMenu />
          <ThemeToggle />
          <SignOutButton>
            <LogOutIcon className='cursor-pointer' />
          </SignOutButton>
        </div>
      </header>
      <main className='p-8'>{children}</main>
    </div>
  )
}
