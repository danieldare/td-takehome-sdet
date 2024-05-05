import { Locator, type Page, expect } from "@playwright/test";

export class Header {
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

  async assertHeaderElementsVisibility() {
    await expect(this.brandLogo).toBeVisible();
    await expect(this.productNavLink).toBeVisible();
    await expect(this.solutionsNavLink).toBeVisible();
    await expect(this.pricingNavLink).toBeVisible();
    await expect(this.signInButton).toBeVisible();
    await expect(this.requestDemoButton).toBeVisible();
    await expect(this.startTrialButton).toBeVisible();
  }
}
