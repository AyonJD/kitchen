// components
import SvgIconStyle from '../../components/SvgIconStyle'
import TextsmsIcon from '@mui/icons-material/Textsms'

// ----------------------------------------------------------------------

const getIcon = name => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: '100%', height: '100%' }}
  />
)

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  feedback: getIcon('ic_chat'),
  dashboard: getIcon('ic_dashboard'),
}

const demoEightSidebarConfig = [
  {
    title: 'Sales Status',
    path: '/demo-eight/sales-status',
    icon: ICONS.dashboard,
  },
  {
    title: ' Sales Records',
    path: '/demo-eight/sales-records',
    icon: ICONS.ecommerce,
  },
]
export default demoEightSidebarConfig
