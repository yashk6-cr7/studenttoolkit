import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { 
  GraduationCap, ArrowRight, ArrowDown, FileText, Brain, Map, 
  Clock, FileCode2, Library, BookOpen, Star 
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-inter selection:bg-accent/30">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/85 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="font-geist text-xl font-bold tracking-tight text-white">Student Toolkit</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-primary-secondary">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#tools" className="hover:text-white transition-colors">Tools</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
            <Link href="/app">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="px-4 pt-24 pb-32 text-center md:pt-32 md:pb-40">
          <div className="container mx-auto max-w-5xl flex flex-col items-center">
            <Badge variant="secondary" className="mb-8">
              <Star className="h-3 w-3 mr-1 text-status-warning fill-status-warning" />
              Trusted by 50,000+ students worldwide
            </Badge>
            
            <h1 className="font-geist text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance">
              Study smarter. <br className="hidden md:block"/>
              <span className="text-accent">Stress less.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-secondary max-w-2xl mb-10 leading-relaxed text-balance">
              Student Toolkit brings AI-powered notes, smart quizzes, study planners, and career tools into one calm, focused workspace — built for students who want results, not noise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
              <Link href="/app">
                <Button size="lg" className="w-full sm:w-auto font-geist text-base gap-2">
                  Get your free toolkit <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#tools">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto gap-2 text-primary-secondary">
                  See all 20+ tools <ArrowDown className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="flex gap-6 text-sm text-primary-muted font-medium">
              <span>✓ Free forever</span>
              <span className="hidden sm:inline">✓ No credit card</span>
              <span className="hidden md:inline">✓ Works on mobile</span>
            </div>

            {/* Dashboard Mockup - Abstracted */}
            <div className="mt-20 w-full max-w-5xl rounded-xl border border-border-subtle bg-surface-elevated/50 p-2 shadow-2xl relative overflow-hidden h-[400px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <div className="w-full h-full rounded-lg border border-border-strong bg-surface flex overflow-hidden">
                {/* Mock Sidebar */}
                <div className="hidden md:flex w-60 border-r border-border-subtle flex-col p-4 gap-4">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <span className="font-geist font-semibold">Student Toolkit</span>
                  </div>
                  <div className="w-full h-8 bg-surface-elevated rounded mb-2" />
                  <div className="w-full h-8 bg-surface-elevated/50 rounded mb-2" />
                  <div className="w-3/4 h-8 bg-surface-elevated/50 rounded" />
                </div>
                {/* Mock Main Content */}
                <div className="flex-1 p-8 flex flex-col gap-6">
                  <div className="w-48 h-8 bg-surface-elevated rounded" />
                  <div className="w-64 h-12 bg-surface-elevated rounded border-l-2 border-accent" />
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-24 rounded-lg border border-border-subtle bg-background p-4" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <section className="border-y border-border-subtle bg-surface py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-medium text-primary-muted mb-6">Join 50,000+ students from top universities</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 font-geist font-bold text-xl md:text-2xl tracking-tight text-white">
              <span>MIT</span>
              <span>Stanford</span>
              <span>Oxford</span>
              <span>IIT</span>
              <span>UC Berkeley</span>
              <span>Harvard</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-24 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="font-geist text-3xl md:text-4xl font-bold mb-4">Everything you need to ace your studies</h2>
              <p className="text-lg text-primary-secondary">One platform. Every tool a student could ever need.</p>
            </div>

            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
              <div className="w-full lg:w-1/2 aspect-video rounded-xl border border-border-subtle bg-surface shadow-elevated flex items-center justify-center">
                <FileText className="h-24 w-24 text-accent/20" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <Badge variant="info" className="mb-4">AI Powered</Badge>
                <h3 className="font-geist text-3xl font-bold mb-4 flex items-center gap-2">📝 AI Notes Generator</h3>
                <p className="text-lg text-primary-secondary leading-relaxed">
                  Paste any topic, upload a PDF, or enter a YouTube link — get beautifully structured notes in seconds. Highlights, summaries, and key concepts automatically extracted.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 mb-32">
              <div className="w-full lg:w-1/2 aspect-video rounded-xl border border-border-subtle bg-surface shadow-elevated flex items-center justify-center">
                <Brain className="h-24 w-24 text-accent-violet/20" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <Badge className="bg-accent-violet/10 text-accent-violet mb-4 hover:bg-accent-violet/20">Study Tool</Badge>
                <h3 className="font-geist text-3xl font-bold mb-4 flex items-center gap-2">🧠 Smart Quiz Generator</h3>
                <p className="text-lg text-primary-secondary leading-relaxed">
                  Automatically create MCQ, fill-in-the-blank, or true/false quizzes from your notes or any topic. Track your score, identify weak areas, and get smarter every session.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 aspect-video rounded-xl border border-border-subtle bg-surface shadow-elevated flex items-center justify-center">
                <Map className="h-24 w-24 text-accent-cyan/20" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <Badge className="bg-accent-cyan/10 text-accent-cyan mb-4 hover:bg-accent-cyan/20">Career</Badge>
                <h3 className="font-geist text-3xl font-bold mb-4 flex items-center gap-2">🗺️ Roadmap Generator</h3>
                <p className="text-lg text-primary-secondary leading-relaxed">
                  Input your goal — crack UPSC, learn Machine Learning, become a full-stack dev — and get a step-by-step learning path tailored to your timeline and current level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOL GRID */}
        <section id="tools" className="py-24 bg-surface border-y border-border-subtle px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-geist text-3xl md:text-4xl font-bold mb-16">20+ tools. One platform.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: "📝", name: "Notes Generator" },
                { icon: "🧠", name: "Quiz Generator" },
                { icon: "⏱", name: "Pomodoro Timer" },
                { icon: "🗺️", name: "Roadmap" },
                { icon: "📄", name: "Resume Builder" },
                { icon: "📚", name: "Resource Hub" },
                { icon: "🎯", name: "Exam Tracker" },
                { icon: "📊", name: "Study Planner" }
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border-subtle bg-background hover:border-border-strong transition-colors text-left">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-primary-muted text-sm">+ 12 more study & career tools included</div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-geist text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to study smarter?</h2>
            <p className="text-xl text-primary-secondary mb-10">Join 50,000+ students already using Student Toolkit — for free.</p>
            <Link href="/app">
              <Button size="lg" className="h-14 px-10 text-lg font-geist shadow-accent-glow">
                Get Started Free — No Signup Needed
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border-subtle bg-background py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent" />
            <span className="font-geist font-semibold">Student Toolkit</span>
          </div>
          <div className="text-sm text-primary-muted">
            © 2024 Student Toolkit. Free forever. Built by a student, for students.
          </div>
        </div>
      </footer>
    </div>
  );
}
