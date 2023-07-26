import { useSetAtom, type PrimitiveAtom } from "jotai"
import { focusAtom } from "jotai-optics"
import type { OpticFor } from "optics-ts"
import { useCallback } from "react"

import type { IRecipe } from "../type"

export const useFocusAtom = (
  anAtom: PrimitiveAtom<IRecipe>,
  key: keyof IRecipe
) => {
  return useSetAtom(
    focusAtom(
      anAtom,
      useCallback((optic: OpticFor<IRecipe>) => optic.prop(key), [key])
    )
  )
}
