import SideBar from "@/components/menu/SideBar";
import './AppLayout.less';

const AppLayout = ({ children }) => {
    return <div className="layout">
        <SideBar />
        <div className="content">{children}</div>
    </div>
}

export default AppLayout;