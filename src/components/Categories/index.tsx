import React from 'react'

import bandejasImg from '~/assets/icons/bandejas.png'
import caixasImg from '~/assets/icons/caixas.png'
import cakeboardsImg from '~/assets/icons/cakeboards.png'
import coreImg from '~/assets/icons/core.png'
import estencilImg from '~/assets/icons/estencil.png'
import spatulaImg from '~/assets/icons/spatulas.png'

import { CategoryItem } from './CategoryItem'
import { CategoriesContainer } from './styles'
import { ICategory } from './types'

const categoriesTemp: ICategory[] = [
  { id: 1, label: 'Espátulas', image: spatulaImg },
  { id: 2, label: 'Estêncil', image: estencilImg },
  { id: 3, label: 'Organizador', image: coreImg },
  { id: 4, label: 'Caixas', image: caixasImg },
  { id: 5, label: 'Bandejas', image: bandejasImg },
  { id: 6, label: 'Cakeboards', image: cakeboardsImg }
]
type Props = {
  categories?: ICategory[]
}

export const Categories: React.FC<Props> = ({ categories = categoriesTemp }) => {
  return (
    <CategoriesContainer>
      {categories.map(({ id, label, image }) => {
        return <CategoryItem key={id} id={id} label={label} image={image} />
      })}
    </CategoriesContainer>
  )
}
