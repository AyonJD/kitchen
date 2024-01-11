// components
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
    <SvgIconStyle
        src={`/static/icons/navbar/${name}.svg`}
        sx={{ width: "100%", height: "100%" }}
    />
);

const ICONS = {
    user: getIcon("ic_user"),
    ecommerce: getIcon("ic_ecommerce"),
    analytics: getIcon("ic_analytics"),
    dashboard: getIcon("ic_dashboard"),
};

const demoTwoSidebarConfig = [
  // {
  //     title: "Order Input",
  //     path: '/demo-two/order-input',
  //     icon: ICONS.dashboard,
  // },
  {
    title: 'Kitchen Display',
    path: '/demo-two/kitchen-display',
    icon: ICONS.ecommerce,
  },
  {
    title: 'Recipe Guide',
    path: '/demo-two/recipe',
    icon: ICONS.analytics,
  },
]
export default demoTwoSidebarConfig;
