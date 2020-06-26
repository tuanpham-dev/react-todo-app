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

export const StyledTodoItem = {
  Wrapper,
  Checkbox,
  Label,
  RemoveButton,
}
