"use client";

import { useState, type ReactNode } from "react";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  EmptyState,
  Input,
  Label,
  LoadingState,
  MetricCard,
  Modal,
  PageHeader,
  SearchBox,
  SectionHeader,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  SidebarSectionLabel,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TopNavigation,
  TopNavigationLink,
} from "@isletmeos/ui";
import { BarChart3, CalendarDays, Command, CreditCard, Layers3, Settings, Sparkles } from "lucide-react";

const colorTokens = [
  ["Background", "bg-background"],
  ["Surface", "bg-surface"],
  ["Card", "bg-card"],
  ["Primary", "bg-primary"],
  ["Accent", "bg-accent"],
  ["Success", "bg-success"],
  ["Warning", "bg-warning"],
  ["Danger", "bg-destructive"],
];

function ShowcaseBlock({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default function DesignSystemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <TopNavigation
        brand={
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
              IO
            </div>
            <span>IsletmeOS</span>
          </div>
        }
        navigation={
          <>
            <TopNavigationLink href="/design-system" active>
              Design System
            </TopNavigationLink>
            <TopNavigationLink href="/">Starter</TopNavigationLink>
          </>
        }
        actions={
          <>
            <SearchBox placeholder="Search components" wrapperClassName="hidden w-64 md:block" />
            <Button variant="outline" size="sm">
              Preview
            </Button>
          </>
        }
      />

      <div className="container py-8 md:py-10">
        <PageHeader
          eyebrow="Sprint 1"
          title="Foundation Design System"
          description="A calm, premium SaaS visual foundation for future IsletmeOS product screens. These examples are intentionally generic and contain no business logic."
          actions={
            <>
              <Badge variant="success">Production-ready</Badge>
              <Badge variant="outline">Dark mode</Badge>
            </>
          }
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[16rem_1fr]">
          <Sidebar className="hidden min-h-[44rem] rounded-lg border xl:flex">
            <SidebarHeader>
              <div className="font-semibold">Components</div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarSection>
                <SidebarSectionLabel>Foundation</SidebarSectionLabel>
                <SidebarItem active href="#tokens">
                  <Sparkles className="size-4" />
                  Tokens
                </SidebarItem>
                <SidebarItem href="#layout">
                  <Layers3 className="size-4" />
                  Layout
                </SidebarItem>
              </SidebarSection>
              <SidebarSection>
                <SidebarSectionLabel>Primitives</SidebarSectionLabel>
                <SidebarItem href="#forms">Forms</SidebarItem>
                <SidebarItem href="#overlays">Overlays</SidebarItem>
                <SidebarItem href="#data">Data</SidebarItem>
              </SidebarSection>
            </SidebarContent>
            <SidebarFooter>
              <p className="text-xs text-muted-foreground">Desktop first, tablet optimized, mobile supported.</p>
            </SidebarFooter>
          </Sidebar>

          <div className="space-y-6">
            <ShowcaseBlock title="Design Tokens" description="Core color, surface, status, radius, shadow, and spacing decisions." >
              <div id="tokens" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {colorTokens.map(([name, className]) => (
                  <div key={name} className="rounded-lg border bg-card p-3">
                    <div className={`${className} h-16 rounded-md border`} />
                    <p className="mt-3 text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">{className}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border p-4 shadow-soft">Soft shadow</div>
                <div className="rounded-lg border p-4 shadow-panel">Panel shadow</div>
                <div className="rounded-lg border p-4 shadow-elevated">Elevated shadow</div>
              </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Buttons And Badges" description="Action hierarchy and compact status communication.">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="icon" aria-label="Command">
                  <Command className="size-4" />
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>Neutral</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Forms" description="Accessible inputs, labels, search, loading, empty, and skeleton states.">
              <div id="forms" className="grid gap-5 lg:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="example-name">Workspace name</Label>
                  <Input id="example-name" placeholder="Acme Operations" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="example-search">Search</Label>
                  <SearchBox id="example-search" placeholder="Search anything" />
                </div>
                <EmptyState
                  title="No records yet"
                  description="Use empty states to explain calm next steps without adding business-specific behavior."
                  action={<Button variant="outline">Create example</Button>}
                />
                <div className="space-y-4 rounded-lg border p-5">
                  <LoadingState />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Cards And Metrics" description="Reusable surfaces for summaries, settings, and operational panels.">
              <div className="grid gap-4 md:grid-cols-3">
                <MetricCard label="Revenue" value="$24.8k" change="+12.4% from last period" tone="success" icon={BarChart3} />
                <MetricCard label="Bookings" value="1,284" change="Stable activity" icon={CalendarDays} />
                <MetricCard label="Payments" value="98.2%" change="2 pending reviews" tone="warning" icon={CreditCard} />
              </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Navigation And Breadcrumbs" description="Consistent orientation patterns for future product screens.">
              <div id="layout" className="space-y-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Design</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Components</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <SectionHeader
                  title="Section header"
                  description="Use this for major panels inside a page."
                  actions={<Button variant="outline" size="sm">Action</Button>}
                />
              </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Overlays" description="Radix-powered dialog, modal, and dropdown primitives.">
              <div id="overlays" className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog component</DialogTitle>
                      <DialogDescription>
                        Dialogs focus attention on a short, reversible task.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Continue</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  Open modal
                </Button>
                <Modal
                  open={isModalOpen}
                  onOpenChange={setIsModalOpen}
                  title="Modal component"
                  description="Use modals for focused decisions that should interrupt the current surface."
                  footer={
                    <>
                      <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
                    </>
                  }
                >
                  <p className="text-sm text-muted-foreground">
                    Modal wraps the dialog primitive for common application workflows.
                  </p>
                </Modal>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open dropdown</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuLabel>View options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Compact density</DropdownMenuCheckboxItem>
                    <DropdownMenuItem>
                      <Settings className="size-4" />
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Tables" description="Dense but readable data display for enterprise workflows.">
              <div id="data" className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {["Foundation", "Components", "Tokens"].map((name, index) => (
                      <TableRow key={name}>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell>
                          <Badge variant={index === 0 ? "success" : "neutral"}>{index === 0 ? "Ready" : "Draft"}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="size-7">
                              <AvatarFallback>IO</AvatarFallback>
                            </Avatar>
                            Design System
                          </div>
                        </TableCell>
                        <TableCell className="text-right tabular-nums">{index + 1}.0</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ShowcaseBlock>

            <section className="dark rounded-xl border bg-background p-6 text-foreground shadow-panel">
              <SectionHeader
                title="Dark Mode"
                description="The same tokens invert calmly in dark surfaces without changing component APIs."
              />
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <MetricCard label="Dark metric" value="42ms" change="Fast interaction target" tone="success" />
                <Card>
                  <CardHeader>
                    <CardTitle>Dark card</CardTitle>
                    <CardDescription>Components inherit the nearest theme context.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm">Action</Button>
                  </CardContent>
                </Card>
                <EmptyState title="Dark empty state" description="Status and empty surfaces remain legible." />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
