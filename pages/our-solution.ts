import { type Page, expect } from "@playwright/test";

export class OurSolution {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fullyRemoteCard() {
    await expect(this.page.locator("img#9e2817a9-1dcd-4cde-8090-5538071c426a")).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Fully Remote" })).toBeVisible();
    await expect(this.page.getByText("Increased visibility and")).toBeVisible();
  }

  async hybridAndOfficeCard() {
    await expect(this.page.locator("img#591ef146-f670-49b1-99bc-a65d78b193a2")).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Hybrid and In-Office" })).toBeVisible();
    await expect(this.page.getByText("Real-time workforce analytics")).toBeVisible();
  }

  async outSourcedCard() {
    await expect(this.page.locator("img#d19fa67a-9653-4a92-9f1f-f454d645f406")).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Outsourced" })).toBeVisible();
    await expect(this.page.getByText("Workforce analytics to drive")).toBeVisible();
  }

  async enterpriseCard() {
    await expect(this.page.getByRole("heading", { name: "Enterprise" })).toBeVisible();
    await expect(
      this.page.getByText("Time tracking and productivity software that scales with you"),
    ).toBeVisible();
    await expect(this.page.getByText("Enterprise-level security and deployment")).toBeVisible();
    await expect(this.page.getByText("GDPR & HIPAA compliance")).toBeVisible();
    await expect(this.page.getByText("Custom user roles and")).toBeVisible();
    await expect(this.page.getByText("60+ integrations with")).toBeVisible();
    await expect(this.page.getByText("24-hour multilingual customer service")).toBeVisible();
    await expect(this.page.getByText("99% uptime SLA")).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Contact Sales" })).toBeVisible();
    await expect(this.page.locator("img#16bf01c0-a463-4b00-b613-389faedccec6")).toBeVisible();
  }

  async dontTakeOurWordForItSection() {
    await expect(
      this.page.getByRole("heading", { name: "Don’t take our word for it" }),
    ).toBeVisible();
    await expect(this.page.getByText("Teams from across the globe")).toBeVisible();

    await expect(this.page.getByRole("img", { name: "Star Rating" }).first()).toBeVisible();
    await expect(this.page.getByRole("img", { name: "Capterra logo" })).toBeVisible();

    await expect(this.page.getByRole("img", { name: "Star Rating" }).nth(1)).toBeVisible();
    await expect(this.page.getByRole("img", { name: "GetApp logo" })).toBeVisible();

    await expect(this.page.getByRole("img", { name: "Star Rating" }).nth(2)).toBeVisible();
    await expect(this.page.getByRole("img", { name: "G2 logo" })).toBeVisible();

    await expect(this.page.getByText(/“Because we use Time Doctor, we’re able to have a flexible schedule. It allows you to adapt to the work schedule that’s best for you.”/)).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Jessamine Eaton" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Manager, Habitium" })).toBeVisible();
    await expect(this.page.getByRole("img", { name: "Habitium logo" })).toBeVisible();
    await expect(this.page.locator("[class*=client-img]")).toBeVisible();
  }

  async assertOurSolutionsElementsVisibility() {
    await expect(this.page.getByRole("heading", { name: "Our Solutions" })).toBeVisible();
    await expect(
      this.page.getByText("The #1 Workforce Analytics Platform for all teams and industries."),
    ).toBeVisible();
    await this.fullyRemoteCard();
    await this.hybridAndOfficeCard();
    await this.outSourcedCard();
    await this.enterpriseCard();
    await this.dontTakeOurWordForItSection();
  }
}
