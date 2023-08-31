import clsx from 'clsx'

import * as resetStyles from './reset.css'
import { Sprinkles, sprinkles } from './sprinkles.css'

export type Atoms = Sprinkles & {
  reset?: keyof JSX.IntrinsicElements
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const atoms = ({ reset, ...rest }: Atoms) => {
  if (!reset) return sprinkles(rest)

  const elementReset = resetStyles.element[reset as keyof typeof resetStyles.element]

  const sprinklesClasses = sprinkles(rest)

  return clsx(resetStyles.base, elementReset, sprinklesClasses)
}
