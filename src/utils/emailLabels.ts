import * as global from '../constants/globalConstants'
import { IEmailListThreadItem } from '../Store/emailListTypes'

const emailLabels = (emailListThreadItem: IEmailListThreadItem) => {
  if (emailListThreadItem.messages)
    return (
      emailListThreadItem.messages[emailListThreadItem.messages.length - 1]
        .labelIds ?? [global.ARCHIVE_LABEL]
    )
  if (emailListThreadItem.message)
    return emailListThreadItem.message.labelIds ?? [global.ARCHIVE_LABEL]
  return [global.ARCHIVE_LABEL]
}

export default emailLabels
