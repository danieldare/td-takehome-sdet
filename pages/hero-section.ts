import { Locator, Page, expect } from "@playwright/test";

export class HeroSection {
  readonly page: Page;
  readonly subHeadingText: Locator;
  readonly mainHeadingText: Locator;
  readonly briefText: Locator;
  readonly tryItFreeButton: Locator;
  readonly viewDemoButton: Locator;
  readonly timeDoctorUserText: Locator;
  readonly boostIcon: Locator;
  readonly ericssonBrandIcon: Locator;
  readonly thriveMarketBrandIcon: Locator;
  readonly kellerWilliams: Locator;
  readonly bbbBrandIcon: Locator;
  readonly fireHouseSunsBrandIcon: Locator;
  readonly reviewBadgeCapterra: Locator;
  readonly reviewBadgeGetApp: Locator;
  readonly reviewBadgeG: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subHeadingText = page.getByRole("heading", { name: "The #1 Workforce Analytics" });
    this.mainHeadingText = page.getByRole("heading", { name: "Get Peace of Mind with" });
    this.briefText = page.getByText("Uncover insights in people,");
    this.tryItFreeButton = page.getByRole("button", { name: "Try it Free" });
    this.viewDemoButton = page.getByRole("button", { name: "View Demo" });
    this.timeDoctorUserText = page.getByRole("heading", { name: "Join Over 260,000 Time Doctor" });
    this.boostIcon = page.locator("img#bcaf9848-b7e2-4961-8bb9-eab782dc831e");
    this.ericssonBrandIcon = page.locator("img#271c657b-e062-46ce-93ff-132e1f085d4a");
    this.thriveMarketBrandIcon = page.locator("img#a00a40de-33ef-4ed3-a38a-a7caf79e6927");
    this.kellerWilliams = page.locator("img#bd6fdd02-4320-436f-956d-6562e5b47a47");
    this.bbbBrandIcon = page.locator("#b08d9f1e-e48a-49d4-a583-1e8164ae96a3");
    this.fireHouseSunsBrandIcon = page.locator("25f6fa38-775f-46a3-9c03-ec1d8e1d7156");
    this.reviewBadgeCapterra = page.locator("[class*='ReviewBadge_ReviewBadge']").nth(1);
    this.reviewBadgeGetApp = page.locator("[class*='ReviewBadge_ReviewBadge']").nth(2);
    this.reviewBadgeG = page.locator("[class*='ReviewBadge_ReviewBadge']").nth(2);
  }

  async assertHeroSectionElementsVisibility() {
    await expect(this.subHeadingText).toBeVisible();
    await expect(this.mainHeadingText).toBeVisible();
    await expect(this.briefText).toBeVisible();
    await expect(this.tryItFreeButton).toBeVisible();
    await expect(this.viewDemoButton).toBeVisible();
    await expect(this.timeDoctorUserText).toBeVisible();
    await expect(this.boostIcon).toBeVisible();
    await expect(this.ericssonBrandIcon).toBeVisible();
    await expect(this.thriveMarketBrandIcon).toBeVisible();
    await expect(this.kellerWilliams).toBeVisible();
    await expect(this.bbbBrandIcon).toBeVisible();
    await expect(this.fireHouseSunsBrandIcon).toBeVisible();
    await expect(this.reviewBadgeCapterra).toBeVisible();
    await expect(this.reviewBadgeGetApp).toBeVisible();
    await expect(this.reviewBadgeG).toBeVisible();
  }
}
