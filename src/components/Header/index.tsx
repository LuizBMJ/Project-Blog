import clsx from 'clsx'
import { SpinLoader } from '../SpinLoader'

export default function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  )
}
