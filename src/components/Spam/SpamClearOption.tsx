import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CustomAttentionButton from '../Elements/Buttons/CustomAttentionButton'
import { useAppSelector } from '../../Store/hooks'
// import { selectMetaList } from '../../Store/metaListSlice'
// import { selectEmailList } from '../../Store/emailListSlice'
// import { selectLabelIds } from '../../Store/labelsSlice'
import { selectIsLoading } from '../../Store/utilsSlice'

const SPAM_BUTTON = 'Clear spam'
const DIALOG_HEADER = 'Confirm deleting messages'
const DIALOG_CONTENT =
  'This action will affect all conversations in Spam. Are you sure you want to continue?'
const CANCEL_BUTTON = 'Cancel'
const OK_BUTTON = 'OK'

const Spamclearoption = () => {
  const [open, setOpen] = useState(false)
  // const metaList = useAppSelector(selectMetaList)
  // const emailList = useAppSelector(selectEmailList)
  // const labelIds = useAppSelector(selectLabelIds)
  const isLoading = useAppSelector(selectIsLoading)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const archiveAllSpam = () => {
    setOpen(false)
    console.log('remove spam')
  }

  return (
    <>
      <CustomAttentionButton
        onClick={handleClickOpen}
        disabled={isLoading}
        label={SPAM_BUTTON}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{DIALOG_HEADER}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {DIALOG_CONTENT}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {CANCEL_BUTTON}
          </Button>
          <Button
            variant="contained"
            onClick={archiveAllSpam}
            color="primary"
            autoFocus
          >
            {OK_BUTTON}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Spamclearoption
