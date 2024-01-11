// components
import SvgIconStyle from '../../components/SvgIconStyle'

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
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
}

const demoFourSidebarConfig = [
  // {
  //     title: "Order Input",
  //     path: '/demo-two/order-input',
  //     icon: ICONS.dashboard,
  // },
  {
    title: 'View Menu',
    path: '/demo-four/product-portfolio',
    icon: ICONS.ecommerce,
  },
  {
    title: 'Customer Feedback',
    path: '/demo-four/feedback',
    icon: ICONS.analytics,
  },
]
export default demoFourSidebarConfig
