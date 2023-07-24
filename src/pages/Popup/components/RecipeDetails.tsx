import clsx from 'clsx';
import React from 'react';

const recipeProperties = [
  'protein',
  'spiceLevel',
  'spice',
  'cookingOil',
  'volume',
  'serves',
  'authenticity',
  'stock',
] as const;

const recipePropertyNamesMap: Map<typeof recipeProperties[number], string> =
  new Map([
    ['protein', 'Protein'],
    ['spiceLevel', 'Spice Level'],
    ['spice', 'Spices'],
    ['cookingOil', 'Cooking Oil'],
    ['volume', 'Volume/Weight'],
    ['serves', 'Serves'],
    ['authenticity', 'Authenticity'],
    ['stock', 'Stock'],
  ]);

type RecipePropertyColor = 'regular' | 'hot' | 'gradient';

const recipePropertyColorsMap: Map<
  typeof recipeProperties[number],
  RecipePropertyColor
> = new Map([
  ['protein', 'regular'],
  ['spiceLevel', 'hot'],
  ['spice', 'gradient'],
  ['cookingOil', 'gradient'],
  ['volume', 'regular'],
  ['serves', 'regular'],
  ['authenticity', 'gradient'],
  ['stock', 'gradient'],
]);

export default function RecipeDetails() {
  return (
    <div className="grid grid-cols-2 gap-y-3 gap-x-6 py-[13px] px-6 bg-[#131823] rounded-md">
      {recipeProperties.map((property) => (
        <RecipeProperty
          key={property}
          name={recipePropertyNamesMap.get(property) || ''}
          value="test test"
          valueFg={recipePropertyColorsMap.get(property) || 'regular'}
        />
      ))}
    </div>
  );
}

function RecipeProperty({
  name,
  value,
  valueFg = 'regular',
}: {
  name: string;
  value: string;
  valueFg: 'regular' | 'hot' | 'gradient';
}) {
  const valueFgGradient =
    'bg-gradient-to-br from-[#ffbf43] to-[#ff4869] bg-clip-text text-transparent';
  const valueFgRegular = 'text-white';
  const valueFgHot = 'text-[#fb2047]';
  const valueFgCls =
    valueFg === 'gradient'
      ? valueFgGradient
      : valueFg === 'hot'
      ? valueFgHot
      : valueFgRegular;

  return (
    <div className="flex flex-col">
      <div className="text-xs text-[#7185AA]">{name}</div>
      <div className={clsx('text-white text-base font-medium', valueFgCls)}>
        {value}
      </div>
    </div>
  );
}
