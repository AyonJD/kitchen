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
            title: "One",
            path: '/demo-one/one',
            icon: ICONS.dashboard,
        },
        {
            title: "Two",
            path: '/demo-one/two',
            icon: ICONS.ecommerce,
        },
        {
            title: "Three",
            path: '/demo-one/three',
            icon: ICONS.analytics,
        },
    ]
export default demoOneSidebarConfig;
