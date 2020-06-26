import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #edebec;
  width: 440px;
  max-width: 100%;
  padding: 20px;
  margin: auto;
`

const Header = styled.header`
  text-align: center;
`

const Input = styled.input`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #515056;
  border: 1px solid #edebec;
  outline-color: #b2b4b3;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #d8d9da;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledTodos = {
  Wrapper,
  Header,
  Input,
  List,
}
