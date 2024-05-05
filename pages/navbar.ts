import { Locator, type Page, expect } from "@playwright/test";

export class NavBar {
  readonly page: Page;
  readonly brandLogo: Locator;
  readonly productNavLink: Locator;
  readonly solutionsNavLink: Locator;
  readonly pricingNavLink: Locator;
  readonly signInButton: Locator;
  readonly requestDemoButton: Locator;
  readonly startTrialButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.brandLogo = page.locator("data-testid='header-logo-desktop'");
    this.productNavLink = page
      .getByRole("menubar")
      .locator("div")
      .filter({ hasText: /^Product$/ });
    this.solutionsNavLink = page
      .getByRole("menubar")
      .locator("div")
      .filter({ hasText: /^Solutions$/ });
    this.pricingNavLink = page.getByRole("menubar").locator("li").filter({ hasText: "Pricing" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
    this.requestDemoButton = page.getByRole("button", { name: "Request a Demo" });
    this.startTrialButton = page.getByRole("button", { name: "Start Trial" });
  }

  async assertProductNagivationProductColumn() {
    await expect(this.page.getByRole("heading", { name: "Product" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Overview" })).toBeVisible();
    await expect(
      this.page.getByText(/Features that help you measure and improve productivity/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Integrations" })).toBeVisible();
    await expect(
      this.page.getByText(/Connect your favourite apps and use them more productively/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Case Studeies" })).toBeVisible();
    await expect(
      this.page.getByText(/How others have ficed their productivity challanges/),
    ).toBeVisible();
  }

  async assertProductNagivationDownloadColum() {
    await expect(this.page.getByRole("heading", { name: "Download" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Desktop App" })).toBeVisible();
    await expect(
      this.page.getByText(/Get started with Time Doctor for Windows, Max OS X, and Linux/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Browser Extensions" })).toBeVisible();
    await expect(
      this.page.getByText(/Track projects and tasks directly from your browswer/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Mobile App" })).toBeVisible();
    await expect(this.page.getByText(/Account for all time worked, even on the go/)).toBeVisible();
  }

  async assertSolutionNavigationByOutSourcingType() {
    await expect(this.page.getByRole("heading", { name: "By Outsourcing Type" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "CX & Contact Center" })).toBeVisible();
    await expect(
      this.page.getByText(/Improve the customer experience and agent experience/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "BPO & KPO" })).toBeVisible();
    await expect(
      this.page.getByText(/Provide clients with proof of schedule adherence and proof of work/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Staff Leasing" })).toBeVisible();
    await expect(
      this.page.getByText(/Enable clients to remotely manage their staff and productivity/),
    ).toBeVisible();
  }

  async assertSolutionNavigationByIndustries() {
    await expect(this.page.getByRole("heading", { name: "By Industries" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Technology Providers" })).toBeVisible();
    await expect(
      this.page.getByText(/Get Visibility of teamworkloads and how they're performing /),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Agencies" })).toBeVisible();
    await expect(
      this.page.getByText(/Take on more projects by helping staff to ve more efficient/),
    ).toBeVisible();
  }

  async assertSolutionNavigationByWorkforce() {
    await expect(this.page.getByRole("heading", { name: "By Workforce" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Fully Remote Teams" })).toBeVisible();
    await expect(
      this.page.getByText(/Get peace of mind that remote teams are working productively/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Hybrid workforce" })).toBeVisible();
    await expect(
      this.page.getByText(/Measure productivity consitently, in and out of office/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "In-Office" })).toBeVisible();
    await expect(
      this.page.getByText(/Gain insight into team workloads daily acticities, and schedules/),
    ).toBeVisible();
  }

  async assertSolutionsNavigationMenu() {
    await this.page.getByRole("heading", { name: "Solutions", exact: true }).click();

    // By Outsorcing Type
    this.assertSolutionNavigationByOutSourcingType();
    //By Industries  Column
    this.assertSolutionNavigationByIndustries();
    // By Workforce
    this.assertSolutionNavigationByWorkforce();
  }

  async assertProductNavigationMenu() {
    await this.page.getByRole("heading", { name: "Product", exact: true }).click();

    //Product Column
    this.assertProductNagivationProductColumn();
    //Download Column
    this.assertProductNagivationDownloadColum();
  }

  async assertHeaderElementsVisibility() {
    await expect(this.brandLogo).toBeVisible();
    await expect(this.productNavLink).toBeVisible();
    await expect(this.solutionsNavLink).toBeVisible();
    await expect(this.pricingNavLink).toBeVisible();
    await expect(this.signInButton).toBeVisible();
    await expect(this.requestDemoButton).toBeVisible();
    await expect(this.startTrialButton).toBeVisible();
    await this.assertProductNavigationMenu();
    await this.assertSolutionsNavigationMenu();
  }
}
