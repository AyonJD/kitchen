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

const demoSixSidebarConfig = [
  {
    title: "Today's Purchase",
    path: '/demo-six/todays-purchase',
    icon: ICONS.dashboard,
  },
  {
    title: 'Purchase Records',
    path: '/demo-six/purchase-records',
    icon: ICONS.ecommerce,
  },
]
export default demoSixSidebarConfig
