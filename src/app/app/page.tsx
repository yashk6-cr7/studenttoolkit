import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, Circle, Flame, Target, Timer, FileText, Brain, Map } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 h-full">
      {/* WELCOME SECTION */}
      <section>
        <h1 className="font-geist text-2xl md:text-3xl font-bold mb-1">Good evening, Alex</h1>
        <p className="text-sm font-medium text-status-warning flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-warning opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-warning"></span>
          </span>
          3 tasks due tomorrow
        </p>
      </section>

      {/* STATS SCROLL (Horizontal on Mobile) */}
      <section className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-4 gap-4 no-scrollbar">
        <StatCard icon={<Flame className="text-status-warning" size={20} />} value="14 day" label="Streak" />
        <StatCard icon={<CheckCircle2 className="text-status-success" size={20} />} value="23" label="Tasks" />
        <StatCard icon={<Timer className="text-accent" size={20} />} value="4.5h" label="Focus" />
        <StatCard icon={<Target className="text-accent-cyan" size={20} />} value="68%" label="Goal" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
        
        {/* PRIORITY TASKS */}
        <section className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-geist text-lg font-semibold">Priority Tasks</h2>
            <button className="text-sm text-accent hover:underline">See all</button>
          </div>
          
          <div className="flex flex-col gap-2">
            <TaskItem title="Read Ch. 5 Biology" time="Tomorrow" urgent />
            <TaskItem title="CS Assignment 3" time="Tonight" urgent />
            <TaskItem title="Review Calculus notes" time="Friday" />
          </div>
        </section>

        {/* QUICK ACTIONS & RECENT */}
        <section className="flex flex-col gap-8">
          <div>
            <h2 className="font-geist text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <QuickActionCard icon={<FileText size={24} />} bg="bg-accent/10" color="text-accent" label="AI Notes" />
              <QuickActionCard icon={<Brain size={24} />} bg="bg-accent-violet/10" color="text-accent-violet" label="Quiz Me" />
              <QuickActionCard icon={<Timer size={24} />} bg="bg-status-warning/10" color="text-status-warning" label="Pomodoro" />
              <QuickActionCard icon={<Map size={24} />} bg="bg-accent-cyan/10" color="text-accent-cyan" label="Roadmap" />
            </div>
          </div>

          <div>
            <h2 className="font-geist text-lg font-semibold mb-4">Recent</h2>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-border-strong mt-1.5 shrink-0" />
                <div>
                  <p className="text-primary font-medium">Generated notes for Calculus</p>
                  <p className="text-primary-muted text-xs mt-0.5">2h ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-border-strong mt-1.5 shrink-0" />
                <div>
                  <p className="text-primary font-medium">Completed Quiz: Biology</p>
                  <p className="text-primary-muted text-xs mt-0.5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <Card className="min-w-[140px] md:min-w-0 flex-shrink-0 bg-surface">
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between mb-1">
          {icon}
        </div>
        <div>
          <h3 className="font-geist text-2xl font-bold">{value}</h3>
          <p className="text-sm text-primary-secondary">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function TaskItem({ title, time, urgent }: { title: string, time: string, urgent?: boolean }) {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/50 hover:bg-surface-elevated transition-colors cursor-pointer group">
      <Circle className="text-primary-muted group-hover:text-primary transition-colors shrink-0" size={20} />
      <div className="flex-1 truncate">
        <p className="text-sm font-medium text-primary truncate">{title}</p>
        <p className="text-xs text-primary-muted mt-0.5">{time}</p>
      </div>
      {urgent && <div className="w-2 h-2 rounded-full bg-status-error shrink-0" />}
    </div>
  );
}

function QuickActionCard({ icon, bg, color, label }: { icon: React.ReactNode, bg: string, color: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-border-subtle bg-surface hover:border-border-strong transition-colors cursor-pointer gap-3 aspect-square">
      <div className={`p-3 rounded-full ${bg} ${color}`}>
        {icon}
      </div>
      <span className="text-xs font-medium text-primary-secondary text-center">{label}</span>
    </div>
  );
}
