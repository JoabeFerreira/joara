import { FC, useState } from "react"
import "./children-selector.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFemale, faMale, faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

interface Props {
    children: Child[]
}

interface Child {
    id: number,
    name: string,
    gender: Gender,
    description: string
}

interface ChildProps {
    child: Child,
    selected: boolean,
    onSelect: (id: number) => void;
}

type Gender = "male" | "female";

const Child: FC<ChildProps> = ({ child, selected, onSelect }) => {
    return (<div onClick={() => onSelect(child.id)} className={`child ${child.gender}${selected ? ' selected' : ''}`}>
        <div className="child-card-header">
            <div className="child-name">{child.name}</div>
            <FontAwesomeIcon icon={child.gender == "male" ? faMars : faVenus} size="lg" />
        </div>
        <div>{child.description}</div>
    </div>)
}

const ChildrenSelector: FC<Props> = ({ children }) => {
    const [selectedChildren, setSelectedChildren] = useState<number[]>([])

    function onSelected(id: number) {
        if (!selectedChildren.includes(id)) {
            if (selectedChildren.length < 2) {
                selectedChildren.push(id);
                setSelectedChildren([...selectedChildren])
            }
            else{
                alert("não, não, não, minha princesa, lembre-se de que a quantidade MÁXIMA que combinamos JUNTOS é de 2 pequetuxos 😘")
            }
        } else {
            setSelectedChildren([...selectedChildren.filter(s => s != id)])
        }
    }

    function GetChildrenNames(){
        return children.filter(c => selectedChildren.includes(c.id)).map(c => c.name).join(" e ")
    }

    return <>
        <div className="children-grid">
            {children.map((c, index) => <Child key={index} child={c} onSelect={onSelected} selected={selectedChildren?.includes(c.id)} />)}
        </div>
        <div className="accept-area">
            <button className="accept-button" onClick={() => alert(selectedChildren.length === 0 ? 'Seleciona pelo menos um minha linda 😥' : `Parabéns amooor!!! 

Você acaba de escolher com sucesso quais vão ser os nomes dos nossos filhos e principalmente a QUANTIDADE EXATA que teremos ☺️ 

Que ${GetChildrenNames()} venha(m) com bastante saúde 🙏`)}>
                <FontAwesomeIcon icon={faCheck} /> Selecionar
            </button>
        </div>
    </>
}

export { ChildrenSelector, Child }