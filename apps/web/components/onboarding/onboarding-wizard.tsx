"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  SearchBox,
} from "@isletmeos/ui";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Coins,
  ImagePlus,
  Sparkles,
  Users,
} from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";

type OnboardingState = {
  companyName: string;
  industry: string;
  employees: string;
  openingTime: string;
  closingTime: string;
  currency: string;
  logoName: string;
};

const initialState: OnboardingState = {
  companyName: "",
  industry: "",
  employees: "",
  openingTime: "09:00",
  closingTime: "18:00",
  currency: "TRY",
  logoName: "",
};

const steps = [
  { id: "welcome", title: "Welcome", description: "Start with the product promise." },
  { id: "company", title: "Company", description: "Name the workspace." },
  { id: "industry", title: "Industry", description: "Choose the closest fit." },
  { id: "employees", title: "Team size", description: "Set a starting scale." },
  { id: "hours", title: "Hours", description: "Define the operating day." },
  { id: "currency", title: "Currency", description: "Set financial defaults." },
  { id: "logo", title: "Logo", description: "Preview brand setup." },
  { id: "finish", title: "Finish", description: "Review the setup." },
] as const;

const industries = [
  "Barber shop",
  "Beauty salon",
  "Restaurant or cafe",
  "Clinic",
  "Auto service",
  "Gym or studio",
  "Other service business",
];

const employeeRanges = ["1", "2-5", "6-15", "16-50", "51+"];

const currencies = [
  { code: "TRY", label: "Turkish Lira", symbol: "₺" },
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "GBP", label: "British Pound", symbol: "£" },
];

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <nav aria-label="Onboarding progress" className="space-y-2">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;

        return (
          <div
            key={step.id}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition ${
              isActive ? "bg-muted text-foreground" : "text-muted-foreground"
            }`}
          >
            <div
              className={`flex size-7 items-center justify-center rounded-full border text-xs font-semibold ${
                isComplete
                  ? "border-success bg-success text-success-foreground"
                  : isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-background"
              }`}
            >
              {isComplete ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
            </div>
            <div className="hidden min-w-0 lg:block">
              <p className="text-sm font-medium">{step.title}</p>
              <p className="truncate text-xs text-muted-foreground">{step.description}</p>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

function OptionCard({
  selected,
  title,
  description,
  icon,
  onClick,
}: {
  selected: boolean;
  title: string;
  description?: string;
  icon?: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-24 w-full items-start gap-4 rounded-lg border bg-card p-4 text-left shadow-soft outline-none transition duration-normal ease-standard hover:border-ring/50 hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring ${
        selected ? "border-ring bg-muted/60" : ""
      }`}
      aria-pressed={selected}
    >
      {icon ? <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">{icon}</span> : null}
      <span>
        <span className="block font-medium">{title}</span>
        {description ? <span className="mt-1 block text-sm text-muted-foreground">{description}</span> : null}
      </span>
    </button>
  );
}

function WorkspacePreview({ state }: { state: OnboardingState }) {
  const initials = state.companyName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <Badge variant="outline">Live preview</Badge>
        <CardTitle>Your future workspace</CardTitle>
        <CardDescription>Local preview only. Nothing is saved yet.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border bg-surface p-4">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              {state.logoName ? <ImagePlus className="size-5" aria-hidden="true" /> : initials || "IO"}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold">{state.companyName || "Your company"}</p>
              <p className="truncate text-sm text-muted-foreground">{state.industry || "Industry not selected"}</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            <div className="flex items-center justify-between rounded-lg border bg-background p-3 text-sm">
              <span className="text-muted-foreground">Team</span>
              <span className="font-medium">{state.employees || "Not set"}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-background p-3 text-sm">
              <span className="text-muted-foreground">Hours</span>
              <span className="font-medium">
                {state.openingTime} - {state.closingTime}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-background p-3 text-sm">
              <span className="text-muted-foreground">Currency</span>
              <span className="font-medium">{state.currency}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState<OnboardingState>(initialState);
  const [industryQuery, setIndustryQuery] = useState("");

  const filteredIndustries = useMemo(
    () =>
      industries.filter((industry) =>
        industry.toLowerCase().includes(industryQuery.trim().toLowerCase()),
      ),
    [industryQuery],
  );

  const progress = Math.round(((currentStep + 1) / steps.length) * 100);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const canContinue =
    currentStep === 0 ||
    currentStep === 4 ||
    currentStep === 6 ||
    currentStep === 7 ||
    (currentStep === 1 && state.companyName.trim().length > 1) ||
    (currentStep === 2 && Boolean(state.industry)) ||
    (currentStep === 3 && Boolean(state.employees)) ||
    (currentStep === 5 && Boolean(state.currency));

  function updateState<Key extends keyof OnboardingState>(key: Key, value: OnboardingState[Key]) {
    setState((previous) => ({ ...previous, [key]: value }));
  }

  function goNext() {
    if (!isLastStep && canContinue) {
      setCurrentStep((step) => step + 1);
    }
  }

  function goBack() {
    if (!isFirstStep) {
      setCurrentStep((step) => step - 1);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b bg-background/82 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs text-primary-foreground">
              IO
            </span>
            <span>IsletmeOS</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href="/">Exit</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container grid min-h-[calc(100vh-4rem)] gap-8 py-8 lg:grid-cols-[17rem_1fr_24rem]">
        <aside className="hidden lg:block">
          <div className="sticky top-8 rounded-xl border bg-card p-3 shadow-panel">
            <StepIndicator currentStep={currentStep} />
          </div>
        </aside>

        <section className="flex items-center">
          <Card className="w-full overflow-hidden">
            <div className="h-1 bg-muted">
              <div
                className="h-full bg-primary transition-all duration-slow ease-standard"
                style={{ width: `${progress}%` }}
              />
            </div>
            <CardHeader className="border-b">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline">
                  Step {currentStep + 1} of {steps.length}
                </Badge>
                <span className="text-sm text-muted-foreground">{progress}% complete</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl">{steps[currentStep].title}</CardTitle>
              <CardDescription>{steps[currentStep].description}</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[28rem] p-6 md:p-8">
              <div className="animate-[fadeIn_180ms_ease-out]">
                {currentStep === 0 ? (
                  <div className="flex min-h-[23rem] flex-col justify-center">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Sparkles className="size-6" aria-hidden="true" />
                    </div>
                    <h1 className="mt-6 max-w-xl text-3xl font-semibold md:text-4xl">
                      Let’s shape your business workspace.
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                      This guided setup creates a polished preview of how İşletmeOS will adapt to
                      your business. Nothing is submitted or stored in this sprint.
                    </p>
                  </div>
                ) : null}

                {currentStep === 1 ? (
                  <div className="max-w-xl space-y-3">
                    <Label htmlFor="company-name">Company name</Label>
                    <Input
                      id="company-name"
                      value={state.companyName}
                      onChange={(event) => updateState("companyName", event.target.value)}
                      placeholder="Example: Nova Salon"
                      autoFocus
                    />
                    <p className="text-sm text-muted-foreground">
                      Use the name customers and staff recognize.
                    </p>
                  </div>
                ) : null}

                {currentStep === 2 ? (
                  <div className="space-y-5">
                    <SearchBox
                      value={industryQuery}
                      onChange={(event) => setIndustryQuery(event.target.value)}
                      placeholder="Search industries"
                    />
                    <div className="grid gap-3 md:grid-cols-2">
                      {filteredIndustries.map((industry) => (
                        <OptionCard
                          key={industry}
                          title={industry}
                          description="Applies future terminology and starter workflows."
                          icon={<Building2 className="size-5 text-muted-foreground" aria-hidden="true" />}
                          selected={state.industry === industry}
                          onClick={() => updateState("industry", industry)}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                {currentStep === 3 ? (
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {employeeRanges.map((range) => (
                      <OptionCard
                        key={range}
                        title={`${range} ${range === "1" ? "employee" : "employees"}`}
                        description="Used later to tune team setup defaults."
                        icon={<Users className="size-5 text-muted-foreground" aria-hidden="true" />}
                        selected={state.employees === range}
                        onClick={() => updateState("employees", range)}
                      />
                    ))}
                  </div>
                ) : null}

                {currentStep === 4 ? (
                  <div className="grid max-w-xl gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="opening-time">Opening time</Label>
                      <Input
                        id="opening-time"
                        type="time"
                        value={state.openingTime}
                        onChange={(event) => updateState("openingTime", event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="closing-time">Closing time</Label>
                      <Input
                        id="closing-time"
                        type="time"
                        value={state.closingTime}
                        onChange={(event) => updateState("closingTime", event.target.value)}
                      />
                    </div>
                    <div className="rounded-lg border bg-surface p-4 sm:col-span-2">
                      <Clock3 className="mb-3 size-5 text-muted-foreground" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        These hours are only used for the local preview. Scheduling rules will be
                        implemented in a later sprint.
                      </p>
                    </div>
                  </div>
                ) : null}

                {currentStep === 5 ? (
                  <div className="grid gap-3 md:grid-cols-2">
                    {currencies.map((currency) => (
                      <OptionCard
                        key={currency.code}
                        title={`${currency.symbol} ${currency.code}`}
                        description={currency.label}
                        icon={<Coins className="size-5 text-muted-foreground" aria-hidden="true" />}
                        selected={state.currency === currency.code}
                        onClick={() => updateState("currency", currency.code)}
                      />
                    ))}
                  </div>
                ) : null}

                {currentStep === 6 ? (
                  <div className="max-w-xl">
                    <Label htmlFor="logo-upload">Business logo</Label>
                    <label
                      htmlFor="logo-upload"
                      className="mt-3 flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-surface p-8 text-center transition hover:border-ring/60 hover:bg-muted/50"
                    >
                      <ImagePlus className="size-8 text-muted-foreground" aria-hidden="true" />
                      <span className="mt-4 font-medium">
                        {state.logoName || "Choose a logo file"}
                      </span>
                      <span className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Local preview only. The file is not uploaded or persisted.
                      </span>
                    </label>
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(event) =>
                        updateState("logoName", event.target.files?.[0]?.name ?? "")
                      }
                    />
                  </div>
                ) : null}

                {currentStep === 7 ? (
                  <div className="flex min-h-[23rem] flex-col justify-center">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-success text-success-foreground">
                      <Check className="size-6" aria-hidden="true" />
                    </div>
                    <h1 className="mt-6 max-w-xl text-3xl font-semibold md:text-4xl">
                      Your workspace preview is ready.
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                      This completes the onboarding experience demonstration. The next approved
                      sprint can connect this flow to real accounts, validation, and persistence.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Badge variant="success">Responsive</Badge>
                      <Badge variant="outline">Accessible</Badge>
                      <Badge variant="outline">No backend</Badge>
                    </div>
                  </div>
                ) : null}
              </div>
            </CardContent>
            <div className="flex flex-col-reverse gap-3 border-t p-5 sm:flex-row sm:justify-between">
              <Button variant="outline" onClick={goBack} disabled={isFirstStep}>
                <ArrowLeft aria-hidden="true" />
                Back
              </Button>
              {isLastStep ? (
                <Button asChild>
                  <Link href="/">
                    View landing page
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              ) : (
                <Button onClick={goNext} disabled={!canContinue}>
                  Continue
                  <ArrowRight aria-hidden="true" />
                </Button>
              )}
            </div>
          </Card>
        </section>

        <aside className="hidden xl:block">
          <div className="sticky top-8">
            <WorkspacePreview state={state} />
          </div>
        </aside>
      </div>
    </main>
  );
}
