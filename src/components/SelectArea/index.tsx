import * as C from './styled'

type Props = {
    title?: string;
    value?: number;
    color?: string;
}

export const ResumeSelect = ({title, value, color}: Props)=>{
    return(
        
                <C.Category>
                    <C.Select>
                        <option>Alimentacao</option>
                        <option>Despesas</option>
                        <option>Ganhos</option>
                    </C.Select>
                </C.Category>
       
    );
}

