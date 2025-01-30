"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Bookmark, PlusSquare, Image } from "lucide-react";
import { ModeToggle } from "../ui/modetoggle";
import { SignedIn, UserButton } from "@clerk/nextjs";


const SideBar = () => {
	const pathname = usePathname();

	const navItems = [
		{ href: "/", label: "Home", icon: Home },
		{ href: "/explore", label: "Explore", icon: Compass },
		{ href: "/savedpost", label: "Saved", icon: Bookmark },
		{ href: "/createpost", label: "Create Post", icon: PlusSquare },
	];

	return (
		<>
			{/* Mobile Top Logo Bar */}
			<div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b md:hidden z-50">
				<div className="flex items-center justify-center h-16">
					<span className="font-bold text-xl">
					<img
								src="/logo.png"
								alt="Logo"
								width={150}
								className="object-contain"
							/>
					</span>
				</div>
			</div>

			{/* Add padding to main content for mobile */}
			<div className="md:hidden h-16"></div>

			{/* Desktop Sidebar */}
			<div className="flex ">
				<div className="hidden md:flex flex-col w-72 border-r bg-background">
					<div className="flex items-center p-6">
						<span className="font-bold text-2xl">
							<img
								src="/logo.png"
								alt="Logo"
								width={150}
								className="object-contain"
							/>
						</span>
					</div>

					<div className="flex flex-col flex-1 overflow-y-auto">
						<div className="px-3 py-2">
							<div className="space-y-1">
								<SignedIn>
									<div className="p-3">
										<UserButton />
									</div>
								</SignedIn>

								{/* Navigation Links */}
								{navItems.map(({ href, label, icon: Icon }) => (
									<Link
										key={href}
										href={href}
										className={`flex items-center px-4 py-3 rounded-lg transition-colors relative 
                      ${
												pathname === href
													? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white"
													: "hover:bg-muted"
											}`}>
										{pathname === href && (
											<div className="absolute left-0 top-0 h-full w-1 rounded-r"></div>
										)}
										<Icon className="h-5 w-5 mr-3" />
										{label}
									</Link>
								))}

								<div className="mt-auto pt-4">
									<div className="px-4 py-3">
										<ModeToggle />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Bottom Navigation */}
			<div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t md:hidden">
				<div className="flex justify-around items-center h-16">
					{navItems.map(({ href, icon: Icon }) => (
						<Link
							key={href}
							href={href}
							className={`p-2 ${pathname === href ? "text-violet-500" : ""}`}>
							<Icon className="h-6 w-6" />
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default SideBar;
