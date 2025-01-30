import FollowCard from "@/components/ui/FollowCard";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col md:flex-row min-h-screen">
			{/* Sidebar */}
			<div className="w-full md:w-1/4 md:sticky md:top-0 md:h-screen">
				<SideBar />
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col items-center justify-between ">
				{children}
			</div>

			{/* Follow Section */}
			<div className="w-full md:w-1/4 p-4 border-l overflow-y-hidden  hidden md:block md:sticky md:top-0 md:h-screen ">
				<div className=" rounded-lg shadow-sm">
					<h2 className="text-xl font-bold p-4 border-b dark:border-gray-800">
						People to Follow
					</h2>
					<div className="space-y-2 ">
						<FollowCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
