import { styled } from '@/common/lib/mui/theme'
import Accordion from '@mui/material/Accordion'

const UAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: '10px !important',
  padding: theme.spacing(3, 4),
  '& .MuiAccordionSummary-root': {
    padding: 0,
    minHeight: 'unset',
    '& .MuiAccordionSummary-content': {
      margin: 0,
      '&.Mui-expanded': {
        marginBottom: theme.spacing(1),
      },
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: 0,
    paddingTop: theme.spacing(1),
    borderTop: `2px solid ${theme.color.grey[1900]}`,
  },
}))

export default UAccordion
