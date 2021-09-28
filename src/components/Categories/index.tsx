import React from 'react'

import bandejasImg from '~/assets/icons/bandejas.png'
import caixasImg from '~/assets/icons/caixas.png'
import cakeboardsImg from '~/assets/icons/cakeboards.png'
import coreImg from '~/assets/icons/core.png'
import estencilImg from '~/assets/icons/estencil.png'
import espatulaImg from '~/assets/icons/spatulas.png'

import { CategoryItem } from './CategoryItem'
import { CategoriesContainer } from './styles'
import { ICategory } from './types'

const defaultCategories: ICategory[] = [
  { id: 1, slug: 'espatulas', label: 'Espátulas', image: espatulaImg, customPage: true },
  { id: 2, slug: 'estencil', label: 'Estêncil', image: estencilImg },
  { id: 3, slug: 'organizador', label: 'Organizador', image: coreImg },
  { id: 4, slug: 'caixas', label: 'Caixas', image: caixasImg },
  { id: 5, slug: 'bandejas', label: 'Bandejas', image: bandejasImg },
  { id: 6, slug: 'cakeboards', label: 'Cakeboards', image: cakeboardsImg }
]
type Props = {
  categories?: ICategory[]
}

export const Categories: React.FC<Props> = ({ categories = defaultCategories }) => {
  return (
    <CategoriesContainer>
      {categories.map(category => {
        return <CategoryItem key={`category-${category.id}`} {...category} />
      })}
    </CategoriesContainer>
  )
}
