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
    this.brandLogo = page.getByTestId("header-logo-desktop");
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
    this.requestDemoButton = page.getByRole("banner").getByRole("button", { name: "View Demo" });
    this.startTrialButton = page.getByRole("button", { name: "Start Trial" });
  }

  async assertProductNagivationProductColumn() {
    await expect(
      this.page.getByRole("group").getByRole("heading", { name: "Product" }),
    ).toBeVisible();
    await expect(this.page.getByRole("menuitem", { name: "Overview" })).toBeVisible();
    await expect(
      this.page
        .getByLabel("Overview")
        .getByText(/Features that help you measure and improve productivity/)
        .first(),
    ).toBeVisible();

    await expect(
      this.page.getByRole("group").getByRole("heading", { name: "Integrations" }),
    ).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Case Studies" })).toBeVisible();
  }

  async assertProductNagivationDownloadColum() {
    await expect(
      this.page.getByRole("group").getByRole("heading", { name: "Download" }),
    ).toBeVisible();
    await expect(this.page.getByRole("menuitem", { name: "Desktop App" })).toBeVisible();
    await expect(
      this.page
        .getByRole("menuitem")
        .filter({ hasText: "Desktop App" })
        .getByText("Get started with Time Doctor for Windows, Mac OS X, and Linux"),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Browser Extensions" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Mobile App" })).toBeVisible();
    await expect(
      this.page
        .getByRole("menuitem", { name: "Mobile App" })
        .getByText(/Account for all time worked, even on the go/),
    ).toBeVisible();
  }

  async assertSolutionNavigationByOutSourcingType() {
    await expect(this.page.getByRole("heading", { name: "By Outsourcing Type" })).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "CX & Contact Center" })).toBeVisible();
    await expect(
      this.page
        .getByRole("menuitem", { name: "CX & Contact Center" })
        .getByText(/Improve the customer experience and agent experience/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "BPO & KPO" })).toBeVisible();
    await expect(
      this.page
        .getByRole("menuitem", { name: "BPO & KPO" })
        .getByText(/Provide clients with proof of schedule adherence and proof of work/),
    ).toBeVisible();

    await expect(this.page.getByRole("heading", { name: "Staff Leasing" })).toBeVisible();
    await expect(
      this.page
        .getByRole("menuitem", { name: "Staff Leasing" })
        .getByText(/Enable clients to remotely manage their staff and productivity/),
    ).toBeVisible();
  }

  async assertSolutionNavigationByIndustries() {
    await expect(this.page.getByRole("heading", { name: "By Industries" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Technology Providers" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Agencies" })).toBeVisible();
  }

  async assertSolutionNavigationByWorkforce() {
    await expect(
      this.page.getByRole("heading", { name: "By Workforce", exact: true }),
    ).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Fully Remote Teams" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Hybrid workforce" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "In-Office", exact: true })).toBeVisible();
  }

  async assertSolutionsNavigationMenu() {
    await this.solutionsNavLink.click();

    // By Outsorcing Type
    await this.assertSolutionNavigationByOutSourcingType();
    //By Industries  Column
    await this.assertSolutionNavigationByIndustries();
    // By Workforce
    await this.assertSolutionNavigationByWorkforce();
  }

  async assertProductNavigationMenu() {
    await this.productNavLink.click();

    //Product Column
    await this.assertProductNagivationProductColumn();
    //Download Column
    await this.assertProductNagivationDownloadColum();
  }

  async assertElementsVisibility() {
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
