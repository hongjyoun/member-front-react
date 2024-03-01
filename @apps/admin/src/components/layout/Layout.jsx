import SideBar from "@/components/menu/SideBar";

const Layout = ({ children }) => {
    return <>
        <SideBar />
        <div>{children}</div>
    </>
}

export default Layout;