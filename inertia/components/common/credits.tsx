import { cn } from '~/lib/utils'

const Credits = () => {
  return (
    <button className="credit group flex items-center justify-center" type="button">
      <span className="credit-text inline-flex items-center justify-center text-sm">
        <div className="credit-text__copyright pr-1">
          <span
            className={cn(
              'copyright inline-block translate-x-0 rotate-[0.001deg]',
              'transition-all duration-500 ease-in-out-back',
              'group-hover:translate-x-0 group-hover:rotate-[360deg]'
            )}
          >
            ©
          </span>
        </div>
        <span className="credit-data__year">{new Date().getFullYear()} </span>
        <span className="credit-data__dot pl-2 pr-2 text-xs">●</span>
        <div className="credit-text__spirit relative overflow-hidden">
          <span
            className={cn(
              'studio inline-block translate-x-0 rotate-[0.001deg]',
              'transition-all duration-500 ease-in-out-back',
              'group-hover:translate-x-[-5rem] group-hover:rotate-[0.001deg]'
            )}
          >
            studio spirit.
          </span>
          <span
            className={cn(
              'by hidden translate-x-0 rotate-[0.001deg] whitespace-nowrap pl-[0.21em] pr-[0.2em] opacity-0 sm:inline-block',
              'transition-all duration-500 ease-in-out-back',
              'group-hover:translate-x-[-5rem] group-hover:rotate-[0.001deg] group-hover:pr-4 group-hover:opacity-100'
            )}
          >
            by John Vÿ.
          </span>
        </div>
      </span>
    </button>
  )
}

export default Credits
