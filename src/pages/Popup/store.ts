import { atom } from 'jotai';

type View = 'recipe-details' | 'add-recipe';

export const viewAtom = atom<View>('recipe-details');
