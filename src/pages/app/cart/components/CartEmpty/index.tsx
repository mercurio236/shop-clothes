import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerCartEmpty, TitleEmpty } from "./styles";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


export function CartEmpty(){
    return(
        <ContainerCartEmpty>
            <FontAwesomeIcon icon={faCartArrowDown} fontSize={90}/>
            <TitleEmpty>Carrinho vazio</TitleEmpty>
        </ContainerCartEmpty>
    )
}