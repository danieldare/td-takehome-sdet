import { type Page, expect } from "@playwright/test";

export class TryTimeDoctor {
  readonly page: Page;
  readonly;
  constructor(page: Page) {
    this.page = page;
  }

  async assertTryTimeDoctorSectionElements() {
    await expect(
      this.page.getByRole("heading", { name: "Try Time Doctor for free" }),
    ).toBeVisible();
    await expect(this.page.getByText("Reveal Workforce Analytics")).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Try it out" })).toBeVisible();
    await expect(this.page.getByText("No credit card required")).toBeVisible();
  }
}
