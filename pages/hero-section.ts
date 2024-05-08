import { Locator, Page, expect } from "@playwright/test";

export class HeroSection {
  private readonly page: Page;
  private textElements: Record<string, Locator>;
  private buttonElements: Record<string, Locator>;
  private brandIcons: Record<string, Locator>;
  private reviewBadges: Locator[];

  constructor(page: Page) {
    this.page = page;

    this.textElements = {
      subHeadingText: page.getByRole("heading", { name: "The #1 Workforce Analytics" }),
      mainHeadingText: page.getByRole("heading", { name: "Get Peace of Mind with" }),
      briefText: page.getByText("Uncover insights in people,"),
      timeDoctorUserText: page.getByRole("heading", { name: "Join Over 260,000 Time Doctor" }),
    };

    this.buttonElements = {
      tryItFreeButton: page.getByRole("button", { name: "Try it Free" }),
      viewDemoButton: page
        .locator('[id="Hero Section"]')
        .getByRole("button", { name: "View Demo" }),
    };

    this.brandIcons = {
      boostIcon: page.locator("#bcaf9848-b7e2-4961-8bb9-eab782dc831e"),
      ericssonBrandIcon: page.locator("//img[@id='271c657b-e062-46ce-93ff-132e1f085d4a']"),
      thriveMarketBrandIcon: page.locator("#a00a40de-33ef-4ed3-a38a-a7caf79e6927"),
      kellerWilliams: page.locator("#bd6fdd02-4320-436f-956d-6562e5b47a47"),
      bbbBrandIcon: page.locator("#b08d9f1e-e48a-49d4-a583-1e8164ae96a3"),
      fireHouseSunsBrandIcon: page.locator("//img[@id='25f6fa38-775f-46a3-9c03-ec1d8e1d7156']"),
    };

    this.reviewBadges = [
      page.locator("[class*='ReviewBadge_ReviewBadge']").first(),
      page.locator("[class*='ReviewBadge_ReviewBadge']").nth(1),
      page.locator("[class*='ReviewBadge_ReviewBadge']").last(),
    ];
  }

  private async assertVisibility(locator: Locator, description: string) {
    try {
      await expect(locator).toBeVisible();
    } catch (error) {
      throw new Error(`Visibility check failed for ${description}.`);
    }
  }

  public async assertElementsVisibility() {
    for (const [key, locator] of Object.entries(this.textElements)) {
      await this.assertVisibility(locator, key);
    }

    for (const [key, locator] of Object.entries(this.buttonElements)) {
      await this.assertVisibility(locator, key);
    }

    for (const [key, locator] of Object.entries(this.brandIcons)) {
      await this.assertVisibility(locator, key);
    }

    for (const [index, locator] of this.reviewBadges.entries()) {
      await this.assertVisibility(locator, `Review Badge ${index + 1}`);
    }
  }
}
