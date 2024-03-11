import SideBar from "@/components/menu/SideBar";
import './Layout.less';

const Layout = ({ children }) => {
    return <div className="layout">
        <SideBar />
        <div className="content">{children}</div>
    </div>
}

export default Layout;