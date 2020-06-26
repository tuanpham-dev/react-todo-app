import styled from 'styled-components'

const Wrapper = styled.li`
  font-weight: bold;
  padding: 12px 0;
  display: flex;

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

export const StyledTodoItem = {
  Wrapper,
  Checkbox,
  Label,
}
