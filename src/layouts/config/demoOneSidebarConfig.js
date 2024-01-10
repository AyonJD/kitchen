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

const demoOneSidebarConfig = [
  {
    title: 'Food Order',
    path: '/demo-one/order-selection',
    icon: ICONS.dashboard,
  },
  {
    title: 'Dine-in Area',
    path: '/demo-one/table-dashboard',
    icon: ICONS.ecommerce,
  },
  {
    title: 'Customer Feedback',
    path: '/demo-one/feedback',
    icon: ICONS.feedback,
  },
]
export default demoOneSidebarConfig
