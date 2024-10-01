import { Credits } from '../common'

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 fixed bottom-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16  md:flex-row">
        <Credits />
      </div>
    </footer>
  )
}
