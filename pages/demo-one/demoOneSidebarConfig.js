// components
import SvgIconStyle from "../../src/components/SvgIconStyle";

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

const demoOneSidebarConfig =
    [
        {
            title: "Order Selection",
            path: '/demo-one/order-selection',
            icon: ICONS.dashboard,
        },
        {
            title: "Table Dashboard",
            path: '/demo-one/table-dashboard',
            icon: ICONS.ecommerce,
        },
        {
            title: "Feedback",
            path: '/demo-one/feedback',
            icon: ICONS.analytics,
        },
    ]
export default demoOneSidebarConfig;
