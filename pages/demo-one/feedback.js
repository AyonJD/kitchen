import DashboardLayout from "src/layouts/dashboard";
import demoOneSidebarConfig from "./demoOneSidebarConfig";


export default function Feedback() {
    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <div>
                <h1>Feedback</h1>
            </div>
        </DashboardLayout>
    )
}