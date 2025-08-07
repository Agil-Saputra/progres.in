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
    title: "Education Center",
    icon: BookOpen,
    href: "/education-center",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
];

export function DashboardSidebar({ children }) {
  const pathname = usePathname();

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
                    className={`
                      w-full h-14 px-4 rounded-xl text-left font-medium transition-all
                      ${
                        isActive
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }
                    `}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <div
                        className={`
                        p-2 rounded-lg
                        ${
                          isActive ? "bg-white/20" : "bg-blue-600 text-white"
                        }
                      `}
                      >
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
                  <span className="text-sm font-medium text-red-600">
                    Logout
                  </span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex-1">
        {children}

        {/* Floating chat button */}
        <Button
          size="icon"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </SidebarInset>
    </SidebarProvider>
  );
}
