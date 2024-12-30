import { Sidebar } from "flowbite-react";
import { HiOutlineCloudUpload, HiArrowSmRight, HiChartPie, HiViewBoards, HiUser, HiShoppingBag, HiTable, HiSupport } from "react-icons/hi";
import userImg from "../assets/mylogo.png";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-red-600 text-black rounded-full">
      <Sidebar aria-label="Sidebar with content separator example">
        <div className="flex items-center space-x-3 py-4 px-4">
          <img src={userImg} alt="User Profile" className="w-20 h-20 " />
          <span className="text-xl font-semibold text-black">BOOK SYNC</span>
        </div>
        <Sidebar.Items className="bg-red-400">
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={() => <HiChartPie className="text-black text-xl mr-3" />}
              className="flex items-center justify-start text-left"
            >
              <span className="text-lg font-semibold text-black">Dashboard</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={() => <HiViewBoards className="text-black text-xl mr-3" />}
              className="flex items-center justify-start text-left"
            >
              <span className="text-lg font-semibold text-black">Upload Books</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/manage"
              icon={() => <HiOutlineCloudUpload className="text-black text-xl mr-3" />}
              className="flex items-center justify-start text-left"
            >
              <span className="text-lg font-semibold text-black">Manage Books</span>
            </Sidebar.Item>
          
            <Sidebar.Item
              href="/shop"
              icon={() => <HiShoppingBag className="text-black text-xl mr-3" />}
              className="flex items-center justify-start text-left"
            >
              <span className="text-lg font-semibold text-black">Products</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="/login"
              icon={() => <HiArrowSmRight className="text-black text-xl mr-3" />}
              className="flex items-center justify-start text-left"
            >
              <span className="text-lg font-semibold text-black">Sign In</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="/logout"
              icon={() => <HiTable className="text-black text-xl mr-3" />}
              className="flex items-center justify-start text-left"
            >
              <span className="text-lg font-semibold text-black">Log Out</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
           
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
