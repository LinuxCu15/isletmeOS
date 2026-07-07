import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  MetricCard,
  SectionHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@isletmeos/ui";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Layers3,
  LineChart,
  MapPin,
  MessageSquare,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  Users,
  Wrench,
} from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";

const features = [
  {
    title: "One calm operating system",
    description: "Appointments, customers, staff, payments, inventory, and reporting share one consistent workspace.",
    icon: Layers3,
  },
  {
    title: "Built for daily speed",
    description: "Dense, quiet screens help teams move through the day without fighting the software.",
    icon: Clock3,
  },
  {
    title: "Enterprise-grade foundation",
    description: "Designed for permissions, multi-location growth, auditability, and secure tenant isolation.",
    icon: ShieldCheck,
  },
  {
    title: "Industry-ready modules",
    description: "Start generic, then adapt language, workflows, and templates for specific business categories.",
    icon: Sparkles,
  },
  {
    title: "Modern financial view",
    description: "Revenue, payments, and operational metrics are designed to be readable at a glance.",
    icon: CreditCard,
  },
  {
    title: "Customer context everywhere",
    description: "Future teams can see the right customer history without jumping between disconnected tools.",
    icon: MessageSquare,
  },
];

const industries = [
  { name: "Barbers", icon: Scissors },
  { name: "Beauty salons", icon: Sparkles },
  { name: "Clinics", icon: Stethoscope },
  { name: "Restaurants", icon: Store },
  { name: "Auto services", icon: Wrench },
  { name: "Gyms", icon: Users },
];

const faqs = [
  {
    question: "Is this connected to real business data?",
    answer: "No. This sprint is a premium UX foundation only. Product logic, authentication, APIs, and database models come later.",
  },
  {
    question: "Can the interface support different industries?",
    answer: "Yes. The visual system is built around reusable primitives that can adapt to vertical terminology and workflows later.",
  },
  {
    question: "Does it support dark mode?",
    answer: "Yes. The landing page and onboarding wizard use the existing token-based dark mode system.",
  },
  {
    question: "Is the onboarding functional?",
    answer: "It uses local mock state so the experience can be demonstrated without backend dependencies.",
  },
];

function ProductScene() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="absolute inset-x-4 top-28 mx-auto max-w-6xl rounded-2xl border bg-background/72 p-3 shadow-overlay backdrop-blur-md md:top-24">
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
                IO
              </div>
              <div>
                <div className="h-3 w-28 rounded-full bg-foreground/90" />
                <div className="mt-2 h-2 w-40 rounded-full bg-muted" />
              </div>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <div className="h-8 w-24 rounded-md border bg-background" />
              <div className="h-8 w-8 rounded-md bg-primary" />
            </div>
          </div>
          <div className="grid gap-4 pt-4 lg:grid-cols-[1fr_20rem]">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Today", "42"],
                ["Revenue", "$8.4k"],
                ["Utilization", "86%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border bg-surface p-4">
                  <div className="h-2 w-20 rounded-full bg-muted-foreground/30" />
                  <div className="mt-5 text-2xl font-semibold">{value}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
              <div className="rounded-lg border bg-surface p-4 md:col-span-3">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-3 w-36 rounded-full bg-foreground/80" />
                  <div className="h-7 w-20 rounded-md bg-muted" />
                </div>
                <div className="space-y-3">
                  {[72, 44, 86, 58].map((width) => (
                    <div key={width} className="grid grid-cols-[5rem_1fr_4rem] items-center gap-3">
                      <div className="h-2 rounded-full bg-muted" />
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-accent" style={{ width: `${width}%` }} />
                      </div>
                      <div className="h-2 rounded-full bg-muted" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden rounded-lg border bg-surface p-4 lg:block">
              <div className="mb-4 h-3 w-32 rounded-full bg-foreground/80" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border bg-background p-3">
                    <div className="size-8 rounded-full bg-muted" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/30" />
                      <div className="h-2 w-1/2 rounded-full bg-muted" />
                    </div>
                    <div className="h-6 w-14 rounded-md bg-success/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-sticky border-b bg-background/78 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="IsletmeOS home">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs text-primary-foreground">
            IO
          </span>
          <span>IsletmeOS</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {["Features", "Industries", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/onboarding">
              Start setup
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <LandingNav />

      <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b pt-16">
        <ProductScene />
        <div className="container relative z-10 py-28 md:py-32">
          <div className="max-w-3xl">
            <Badge variant="outline" className="bg-background/70 backdrop-blur">
              Premium operations platform for growing local businesses
            </Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] md:text-7xl">
              The operating system for modern small businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              IsletmeOS gives service businesses a calm, modular workspace for future scheduling,
              customers, staff, inventory, payments, and reporting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/onboarding">
                  Begin onboarding
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#features">Explore foundation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-20 md:py-28">
        <SectionHeader
          title="Designed for the pace of real operations"
          description="A premium foundation for future workflows, with reusable patterns that keep every screen calm and consistent."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/82">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border bg-surface">
                  <feature.icon className="size-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="industries" className="border-y bg-surface/60 py-20 md:py-28">
        <div className="container">
          <SectionHeader
            title="One foundation, many industries"
            description="The product language is intentionally modular so future verticals can feel specialized without fragmenting the platform."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.name}>
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-muted">
                    <industry.icon className="size-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{industry.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Configurable workflow foundation</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_26rem]">
          <div>
            <SectionHeader
              title="Demo-ready product surfaces"
              description="The UI already establishes the product promise: structured, responsive, and reassuringly precise."
            />
            <div className="mt-8 rounded-xl border bg-card p-4 shadow-panel">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Workspace</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead className="text-right">Health</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Salon pilot", "Ready", "Istanbul", "98%"],
                    ["Clinic template", "Planned", "Ankara", "84%"],
                    ["Auto service", "Draft", "Izmir", "76%"],
                  ].map(([name, status, region, health]) => (
                    <TableRow key={name}>
                      <TableCell className="font-medium">{name}</TableCell>
                      <TableCell>
                        <Badge variant={status === "Ready" ? "success" : "neutral"}>{status}</Badge>
                      </TableCell>
                      <TableCell>{region}</TableCell>
                      <TableCell className="text-right tabular-nums">{health}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="grid gap-4">
            <MetricCard label="Setup clarity" value="8 steps" change="Guided from first visit" tone="success" icon={Check} />
            <MetricCard label="UI latency target" value="<100ms" change="Designed for fast perception" icon={LineChart} />
            <MetricCard label="Industries" value="6+" change="Expandable module language" icon={MapPin} />
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-y bg-surface/60 py-20 md:py-28">
        <div className="container">
          <SectionHeader
            title="Placeholder testimonials"
            description="Prepared for real customer proof once pilots begin."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Owner", "Manager", "Operator"].map((role) => (
              <Card key={role}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{role.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{role} placeholder</p>
                      <p className="text-sm text-muted-foreground">Pilot customer quote</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    “This space is reserved for verified customer feedback after the first pilot
                    deployments.”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="container py-20 md:py-28">
        <SectionHeader
          title="Pricing placeholder"
          description="Pricing architecture will be finalized after the MVP scope and pilot industry are confirmed."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {["Starter", "Growth", "Scale"].map((plan, index) => (
            <Card key={plan} className={index === 1 ? "border-primary shadow-elevated" : undefined}>
              <CardHeader>
                <Badge variant={index === 1 ? "primary" : "outline"}>{index === 1 ? "Recommended" : "Placeholder"}</Badge>
                <CardTitle className="pt-3">{plan}</CardTitle>
                <CardDescription>Plan details will be defined in a later product sprint.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">TBD</div>
                <Button className="mt-5 w-full" variant={index === 1 ? "primary" : "outline"} disabled>
                  Coming later
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="border-y bg-surface/60 py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionHeader title="FAQ" description="Clear boundaries for this UX-only sprint." />
          <div className="mt-8 divide-y rounded-xl border bg-card">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.question}
                  <ChevronDown className="size-4 text-muted-foreground transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="container flex flex-col gap-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
            IO
          </span>
          <span>IsletmeOS</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/design-system" className="hover:text-foreground">Design system</Link>
          <Link href="/onboarding" className="hover:text-foreground">Onboarding</Link>
          <a href="#features" className="hover:text-foreground">Features</a>
        </div>
      </footer>
    </main>
  );
}
