import { TODO_FILTERS } from '../../common/consts'
import { type FilterValue } from '../../types'

const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
            <ul className="filters flex justify-around ">
              {
                Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
                  const isSelected = filterSelected === key
                  const className = isSelected ? 'selected' : ''
                  return (
                    <li key={key}>
                      <a
                        className={`${className} border-gradient rounded` }
                        href={href}
                        onClick={(event) => {
                          event.preventDefault()
                          onFilterChange(key as FilterValue)
                        }}
                      >
                        {literal}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
  )
}
