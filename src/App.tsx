import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMount, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredListed] = useState<Item[]>([]);
  const [currentMonth, setCurrentMount] = useState( getCurrentMount());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=>{
    setFilteredListed( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount)

  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMount(newMonth)
  } 
  
  const handleAddItem = (item: Item) =>{
    let newList = [...list]
    newList.push(item);
    setList(newList);
  } 

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        
        />

        <InputArea onAdd ={handleAddItem} />

        <TableArea list = {filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App