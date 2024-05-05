import { type Page, expect } from "@playwright/test";

export class Footer {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertGeneralColumnElements() {
    await expect(this.page.getByRole("heading", { name: "General" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Customer Reviews" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Request a Demo" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Resources" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Benchmarking Tool" })).toBeVisible();
  }

  async assertFeaturesColumnElements() {
    await expect(this.page.getByRole("heading", { name: "Features" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "All Features" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Time Tracking" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Payroll" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Timesheets" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Time Management" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Screen Monitoring" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Employee Productivity" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Attendance" })).toBeVisible();
  }

  async assertContactColumnElements() {
    await expect(this.page.getByRole("heading", { name: "Contact" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Help Center" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Partner Programs" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Contact Us" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Uptime Status" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Jobs" })).toBeVisible();
  }

  async assertByIndustryColumnElements() {
    await expect(this.page.getByRole("heading", { name: "By Industry" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "CX & Contact Centers" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "BPO & KPO" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Staff Leasing" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Technology Providers" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Agencies" })).toBeVisible();
  }

  async assertByUseCaseColumnElements() {
    await expect(this.page.getByRole("heading", { name: "By Use Case" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Accountability" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Productivity", exact: true })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Profitability" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Empowering Employees" })).toBeVisible();
  }

  async assertByWorkForceTypeColumnElements() {
    await expect(this.page.getByRole("heading", { name: "By Workforce Type" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Fully Remote Teams" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Hybrid Workforce" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "In-Office" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Enterprise" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "SME & SMB" })).toBeVisible();
  }

  async assertByIngrationsRowElements() {
    await expect(this.page.getByRole("heading", { name: "Integrations" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "JIRA" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Asana" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Trello" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "G Suite" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Monday" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Intercom" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Office 365" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Salesforce" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Slack" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Todoist" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "API" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "See All 60+ Integrations" })).toBeVisible();
  }

  async assertSecurityDetails() {
    await expect(this.page.getByRole("link", { name: "Security & Compliance" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "GDPR" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "ISO 27001:" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "SLA", exact: true })).toBeVisible();
  }

  async assertOtherLinks() {
    await expect(this.page.getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await expect(this.page.getByRole("link", { name: "Terms of Service" })).toBeVisible();
    await expect(this.page.getByLabel("facebook link")).toBeVisible();
    await expect(this.page.getByLabel("twitter link")).toBeVisible();
    await expect(this.page.getByLabel("linkedin link")).toBeVisible();
    await expect(this.page.getByLabel("instagram link")).toBeVisible();
  }
}
