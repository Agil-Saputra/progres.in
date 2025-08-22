"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  Plus,
  Link,
  BookOpen,
  User,
  LogOut,
  MessageCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image"
import logo from "../assets/logo.svg";

// Navigation items data
const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Buat Website",
    icon: Plus,
    href: "/create-website",
  },
  {
    title: "Publikasi & Link Website",
    icon: Link,
    href: "/publish",
  },
  {
    title: "Pusat Edukasi",
    icon: BookOpen,
    href: "/education-center",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
];

// Function to get page title based on pathname
const getPageTitle = (pathname) => {
  const pageMap = {
    '/dashboard': 'Dashboard',
    '/create-website': 'Buat Website',
    '/edit-website': 'Buat Website',
    '/publish': 'Publikasi & Link Website',
    '/education-center': 'Pusat Edukasi',
    '/profile': 'Profile'
  };
  return pageMap[pathname] || 'Dashboard';
};

export function DashboardSidebar({ children }) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // Hamburger menu button for mobile
  const HamburgerIcon = (
    <button
      className="md:hidden block p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
      aria-label="Open sidebar menu"
      onClick={() => setSidebarOpen(true)}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="2" rx="1" fill="#374151" />
        <rect x="4" y="11" width="16" height="2" rx="1" fill="#374151" />
        <rect x="4" y="15" width="16" height="2" rx="1" fill="#374151" />
      </svg>
    </button>
  );

  // Mobile sidebar overlay
  const MobileSidebar = (
    <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute top-0 left-0 h-full w-72 bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18" stroke="#374151" strokeWidth="2" strokeLinecap="round"/><path d="M6 18L18 6" stroke="#374151" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <SidebarContent className="px-4 pt-4 flex-1 overflow-y-auto">
          <SidebarMenu className="space-y-3">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full h-14 px-4 rounded-xl text-left font-medium transition-all ${isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}`}
                  >
                    <a href={item.href} className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
                      <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-blue-600 text-white"}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="px-4 pb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="w-full h-14 px-4 rounded-xl bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              >
                <button className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-100">
                    <LogOut className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm font-medium text-red-600">Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </div>
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={() => setSidebarOpen(false)}></div>
    </div>
  );

  return (
    <SidebarProvider>
      <Sidebar className="border-r bg-gray-50">
        <div className="grid place-items-center py-6">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
        <SidebarContent className="px-4">
          <SidebarMenu className="space-y-3">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full h-14 px-4 rounded-xl text-left font-medium transition-all ${isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}`}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-blue-600 text-white"}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="px-4 pb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="w-full h-14 px-4 rounded-xl bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              >
                <button className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-100">
                    <LogOut className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm font-medium text-red-600">Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Mobile Sidebar Overlay */}
      {MobileSidebar}

      <SidebarInset className="flex-1">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
          {HamburgerIcon}
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}