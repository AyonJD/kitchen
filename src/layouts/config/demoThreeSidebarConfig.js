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

const demoThreeSidebarConfig =
    [
        {
            title: "Sales",
            path: '/demo-three/sales',
            icon: ICONS.dashboard,
        },
        {
            title: "Current Accounts",
            path: '/demo-three/current-accounts',
            icon: ICONS.ecommerce,
        },
        {
            title: "Analytics",
            path: '/demo-three/analytics',
            icon: ICONS.analytics,
        },
    ]
export default demoThreeSidebarConfig;
