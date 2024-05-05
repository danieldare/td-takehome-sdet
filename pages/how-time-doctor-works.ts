import { Locator, type Page, expect } from "@playwright/test";

export class HowTimeDoctorWorks {
  readonly page: Page;
  readonly headingText: Locator;
  readonly briefText: Locator;

  readonly uncoverWorkForceInsightHeading: Locator;
  readonly uncoverWorkForceInsightBriefText: Locator;
  readonly uncoverWorkForceInsightImage: Locator;

  readonly teamPerformanceRetentionHeading: Locator;
  readonly teamPerformanceRetentionBriefText: Locator;
  readonly teamPerformanceRetentionImage: Locator;

  readonly peaceOfMindHeadingText: Locator;
  readonly peaceOfMindBriefText: Locator;
  readonly peaceOfMindImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headingText = page.getByRole("heading", { name: "How Time Doctor Works" });
    this.briefText = page.getByText("Make your business effective");

    this.uncoverWorkForceInsightHeading = page.getByText("Uncover Workforce Insights");
    this.uncoverWorkForceInsightBriefText = page.getByText(
      /Gain hidden workforce insights from all levels of your business, visualized in real-time dashboards and reports. Identify productivity bottlenecks, capacity gaps, work-life imbalances, and preferred tools. Gain actionable insights to optimize workforce performance and employee well-being./,
    );
    this.uncoverWorkForceInsightImage = page.locator("img#a58ac646-008a-4739-acdc-25fd479f95aa");

    this.teamPerformanceRetentionHeading = page.getByText("Enhance Team Performance & Retention");
    this.teamPerformanceRetentionBriefText = page.getByText(
      /Boost revenue by balancing workforce well-being and increasing productivity. Implement processes and behavior shifts for engaged teams, efficient tool usage, and effective work output./,
    );
    this.teamPerformanceRetentionImage = page.locator("img#8ad387fb-a98f-429d-89e7-5e7d5da5d60c");

    this.peaceOfMindHeadingText = page.getByText("Get Peace of Mind");
    this.peaceOfMindBriefText = page.getByText(
      /Getting a deep understanding of how your workforce operates allows you and your business to eliminate distractions, be more effective and reduce anxiety/,
    );
    this.peaceOfMindImage = page.locator("img#7e5bec77-8cd7-4cec-8e55-e936aa8ab2ad");
  }

  async assertHeaderElementsVisibility() {
    await expect(this.headingText).toBeVisible();
    await expect(this.briefText).toBeVisible();

    await expect(this.uncoverWorkForceInsightHeading).toBeVisible();
    await expect(this.uncoverWorkForceInsightBriefText).toBeVisible();
    await expect(this.uncoverWorkForceInsightImage).toBeVisible();

    await expect(this.teamPerformanceRetentionHeading).toBeVisible();
    await expect(this.teamPerformanceRetentionBriefText).toBeVisible();
    await expect(this.teamPerformanceRetentionImage).toBeVisible();

    await expect(this.peaceOfMindHeadingText).toBeVisible();
    await expect(this.peaceOfMindBriefText).toBeVisible();
    await expect(this.peaceOfMindImage).toBeVisible();
  }
}
