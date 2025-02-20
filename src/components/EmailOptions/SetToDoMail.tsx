import { FindLabelByName } from '../../utils/findLabel'
import * as todo from '../../constants/todoConstants'
import { LabelIdName } from '../../Store/labelsTypes'
import { updateEmailLabel } from '../../Store/emailListSlice'
import filterIllegalLabels from '../../utils/filterIllegalLabels'

interface SetToDoMailProps {
  messageId: string
  labelIds: string[]
  dispatch: Function
  storageLabels: LabelIdName[]
}

const SetToDoMail = (props: SetToDoMailProps) => {
  const { messageId, labelIds, dispatch, storageLabels } = props
  const onlyLegalLabels = filterIllegalLabels(labelIds, storageLabels)

  const ToDoAction = () => {
    const toDoLabel = FindLabelByName({ storageLabels, LABEL_NAME: todo.LABEL })
    const request = {
      removeLabelIds: onlyLegalLabels,
      addLabelIds: [toDoLabel[0].id],
    }
    dispatch(
      updateEmailLabel({ messageId, request, labelIds: onlyLegalLabels })
    )
  }

  return ToDoAction()
}

export default SetToDoMail
