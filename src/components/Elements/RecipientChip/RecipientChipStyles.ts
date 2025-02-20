import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import * as themeConstants from '../../../constants/themeConstants'

const StyledChip = styled(Chip)({
  borderRadius: '0.5rem',
  backgroundColor: `${themeConstants.colorGreyHover}`,
  border: `1px solid ${themeConstants.colorGreyBorder}`,
  fontSize: '0.95rem',
  '&:hover': {
    borderColor: `${themeConstants.colorGreyHover}`,
    backgroundColor: `${themeConstants.colorPurpleSoft}`,
  },
})

export default StyledChip
