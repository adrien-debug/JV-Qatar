"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BankIcon, MenuIcon, XIcon, ArrowRightIcon, SparklesIcon2 } from "@/components/icons/GeneralIcons";
import { BuildingIcon as BuildingIconSection, RocketIcon as RocketIconSection, RobotIcon as RobotIconSection } from "@/components/icons/SectionIcons";

const navItems = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/legalblock", label: "LegalBlock", icon: BuildingIconSection },
  { href: "/legalblock/new-opportunity", label: "Nouvelle Opportunité", icon: RocketIconSection },
  { href: "/legalblock/advisor", label: "AdvisorBlock", icon: RobotIconSection },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b border-violet-800/50 px-6">
          <Link
            href="/"
            className="flex items-center space-x-3 text-2xl font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            <BankIcon className="h-8 w-8 text-violet-200" />
            <span className="bg-gradient-to-r from-violet-200 to-purple-200 bg-clip-text text-transparent">
              BlockBank
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white/80 hover:text-white transition-colors"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="mt-8 space-y-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center space-x-4 rounded-xl px-4 py-4 text-lg font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50"
                    : "text-violet-100 hover:bg-violet-800/50 hover:text-white"
                }`}
              >
                <IconComponent className={`h-6 w-6 ${isActive ? "text-white" : "text-violet-200"}`} />
                <span>{item.label}</span>
                {isActive && (
                  <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-violet-800/50 p-6">
          <div className="rounded-xl bg-gradient-to-r from-violet-800/50 to-purple-800/50 p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <SparklesIcon2 className="h-6 w-6 text-violet-200" />
              <div>
                <p className="text-sm font-semibold text-white">Plateforme Premium</p>
                <p className="text-xs text-violet-200">Tokenisation RWA</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 p-3 text-white shadow-lg transition-all hover:scale-105 lg:hidden"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </>
  );
}

