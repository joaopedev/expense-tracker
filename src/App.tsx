import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMount, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredListed] = useState<Item[]>([]);
  const [currentMonth, setCurrentMount] = useState( getCurrentMount());

  useEffect(()=>{
    setFilteredListed( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de info */}

        {/* area de insercao */}

        <TableArea list = {filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App