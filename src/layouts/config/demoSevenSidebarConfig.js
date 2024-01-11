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

const demoSevenSidebarConfig = [
  {
    title: 'Current Stock',
    path: '/demo-seven/current-stock',
    icon: ICONS.dashboard,
  },
  {
    title: 'Stock Records',
    path: '/demo-seven/stock-records',
    icon: ICONS.ecommerce,
  },
]
export default demoSevenSidebarConfig
