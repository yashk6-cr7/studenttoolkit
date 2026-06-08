import { ReactNode } from "react";
import Link from "next/link";
import { 
  GraduationCap, Home, CheckSquare, Clock, Map, 
  Settings, User, Bell, Search, FileText, Brain 
} from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background text-primary font-inter overflow-hidden">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border-subtle bg-surface">
        <div className="p-4 flex items-center gap-2 h-16 border-b border-border-subtle">
          <GraduationCap className="h-6 w-6 text-accent" />
          <span className="font-geist font-bold text-lg">Student Toolkit</span>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-xs font-semibold text-primary-muted mb-2 px-2 uppercase tracking-wider">Main</div>
          <nav className="flex flex-col gap-1 mb-8">
            <NavItem href="/app" icon={<Home size={18} />} label="Dashboard" active />
            <NavItem href="#tasks" icon={<CheckSquare size={18} />} label="Tasks" />
            <NavItem href="#planner" icon={<Clock size={18} />} label="Planner" />
          </nav>

          <div className="text-xs font-semibold text-primary-muted mb-2 px-2 uppercase tracking-wider">Tools</div>
          <nav className="flex flex-col gap-1">
            <NavItem href="#notes" icon={<FileText size={18} />} label="AI Notes" />
            <NavItem href="#quiz" icon={<Brain size={18} />} label="Quiz Generator" />
            <NavItem href="#roadmap" icon={<Map size={18} />} label="Roadmaps" />
          </nav>
        </div>

        <div className="p-4 border-t border-border-subtle flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
            AK
          </div>
          <div className="flex flex-col flex-1 overflow-hidden">
            <span className="text-sm font-medium truncate">Alex Kumar</span>
            <span className="text-xs text-primary-muted truncate">Free Plan</span>
          </div>
          <Settings size={16} className="text-primary-secondary cursor-pointer hover:text-primary" />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* DESKTOP TOP BAR */}
        <header className="hidden md:flex h-16 border-b border-border-subtle bg-background/80 backdrop-blur items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-muted" />
            <Input className="pl-9 bg-surface/50 h-9" placeholder="Search commands, tools, or notes... (⌘K)" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer text-primary-secondary hover:text-primary">
              <Bell size={20} />
              <div className="absolute top-0 right-0 h-2 w-2 bg-status-error rounded-full border border-background"></div>
            </div>
          </div>
        </header>

        {/* MOBILE TOP BAR */}
        <header className="md:hidden sticky top-0 z-10 flex h-16 border-b border-border-subtle bg-background/80 backdrop-blur items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="font-geist font-semibold text-sm">Alex Kumar</span>
          </div>
          <div className="flex items-center gap-4 text-primary-secondary">
            <Search size={20} />
            <div className="relative">
              <Bell size={20} />
              <div className="absolute top-0 right-0 h-2 w-2 bg-status-error rounded-full border border-background"></div>
            </div>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-4xl h-full pb-20 md:pb-0">
            {children}
          </div>
        </main>

        {/* MOBILE BOTTOM NAV */}
        <nav className="md:hidden fixed bottom-0 w-full h-[60px] border-t border-border-subtle bg-surface z-50 flex items-center justify-around px-2">
          <MobileNavItem active icon={<Home size={24} />} />
          <MobileNavItem icon={<FileText size={24} />} />
          
          {/* Main Action FAB */}
          <div className="relative -top-5 h-14 w-14 rounded-full bg-accent text-white flex items-center justify-center shadow-accent-glow cursor-pointer hover:bg-accent-hover transition-colors">
            <span className="text-3xl font-light mb-1">+</span>
          </div>
          
          <MobileNavItem icon={<Map size={24} />} />
          <MobileNavItem icon={<User size={24} />} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, active }: { href: string, icon: ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-3 py-2 rounded-ui text-sm font-medium transition-colors ${
        active 
          ? "bg-accent/10 text-accent" 
          : "text-primary-secondary hover:bg-surface-elevated hover:text-primary"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function MobileNavItem({ icon, active }: { icon: ReactNode, active?: boolean }) {
  return (
    <div className={`p-2 cursor-pointer ${active ? "text-accent" : "text-primary-secondary"}`}>
      {icon}
    </div>
  );
}
