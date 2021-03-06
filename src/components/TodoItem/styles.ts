import styled from 'styled-components'

const Wrapper = styled.li`
  font-weight: bold;
  padding: 12px 0;
  display: flex;
  position: relative;
  padding-right: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid #edebec;
  }
`

const Checkbox = styled.input`
  cursor: pointer;
  border: 1px solid #edebec;
  width: 24px;
  height: 24px;
  margin: 0 10px 0 0;
  vertical-align: middle;
  flex-shrink: 0;
`

const Label = styled.span`
  transition: opacity 0.3s ease-in-out;

  ${Checkbox}:checked + & {
    text-decoration: line-through;
    opacity: 0.6;
  }
`

const RemoveButton = styled.button`
  cursor: pointer;
  font-size: 30px;
  color: #f64747;
  background: none;
  border: 0;
  display: block;
  padding: 0;
  width: 24px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Wrapper}:hover &,
  ${Checkbox}:focus ~ & {
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    opacity: 1 !important;
  }
`

const Input = styled.input`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #515056;
  border: 1px solid #edebec;
  outline-color: #b2b4b3;
  width: 100%;
  padding: 8px 20px;
  margin-right: -30px;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #d8d9da;
  }
`

export const StyledTodoItem = {
  Wrapper,
  Checkbox,
  Label,
  RemoveButton,
  Input,
}
