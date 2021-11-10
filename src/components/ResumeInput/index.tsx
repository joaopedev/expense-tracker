import * as C from './styled'

type Props = {
    title: string;
}

export const ResumeInput = ({title}: Props)=>{
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
        </C.Container>
    );
}

