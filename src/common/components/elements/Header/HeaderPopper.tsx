import { styled } from '@/common/lib/mui/theme'
import UPopper from '@/common/components/elements/UPopper'

const StyledHeaderPopper = styled(UPopper)(({ theme }) => ({
  zIndex: theme.constants.zIndex.headerPopper,
  [theme.breakpoints.down('sm')]: {
    marginTop: `-${theme.constants.headerHeight.sm}px !important`,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: `-${theme.constants.headerHeight.sm}px !important`,
  },
  [theme.breakpoints.up('md')]: {
    marginTop: `-${theme.constants.headerHeight.md}px !important`,
  },
}))

export default StyledHeaderPopper
