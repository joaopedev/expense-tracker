import * as C from './styles'
import { Item } from '../../types/Item'
import { ResumeInput } from '../ResumeInput/index'
import { ResumeSelect } from '../SelectArea/index'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props)=>{
    
    const handleAddEvent = ()=>{
        let newItem: Item = {
            date: new Date(2021, 10, 27),
            category: 'food',
            title: 'Teste',
            value: 250,
        }
        onAdd(newItem)
    }
    return (
        <C.Container>
            <C.InputContainer>
                <ResumeInput title={'Data'}/>
                <input placeholder={'xx/xx/xxxx'}></input>
            </C.InputContainer>
            <C.InputContainer>
                <ResumeInput title={'Titulo'}/>
                <input placeholder={'Ex: Padaria...'}></input>
            </C.InputContainer>
            
            <C.InputContainer>
                <ResumeInput title={'Category'}/>
                <ResumeSelect/>
            </C.InputContainer>
                <C.Button onClick={handleAddEvent}>
                    Adicionar
                </C.Button>
        </C.Container>
    )
}