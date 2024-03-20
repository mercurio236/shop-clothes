import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const TitleModal = styled.p`
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`

export const ButtonClose = styled.button`
  all: unset;
  position: absolute;
  margin-left: 17rem;
  top: 23rem;
  padding: 0.2rem;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme['black-25']};
    border-radius: 100%;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const Input = styled.input`
  all: unset;
  border: 1px solid ${(props) => props.theme['black-50']};
  padding: 0.8rem;
  border-radius: 5px;
  display: flex;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const StyledModal = Modal.styled`
    width: 20rem;
    height: 15rem;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 5px;
    background-color: white;
    transition : all 0.3s ease-in-out;

`
