import { Locator, type Page, expect } from "@playwright/test";

interface SectionElements {
  heading: Locator;
  briefText: Locator;
  image?: Locator;
}

export class HowTimeDoctorWorks {
  readonly page: Page;
  readonly briefText: Locator;

  private readonly sectionElements: Map<string, SectionElements>;

  constructor(page: Page) {
    this.page = page;

    /**
     * Stores elements for different sections of the "How Time Doctor Works" page.
     * Each section is identified by a key and includes locators for heading, brief text,
     * and optionally an image.
     */

    this.sectionElements = new Map([
      [
        "header",
        {
          heading: page.getByRole("heading", { name: "How Time Doctor Works" }),
          briefText: page.getByText("Make your business effective"),
        },
      ],
      [
        "uncoverWorkForceInsight",
        {
          heading: page.getByText("Uncover Workforce Insights"),
          briefText: page.getByText(
            /Gain hidden workforce insights from all levels of your business, visualized in real-time dashboards and reports. Identify productivity bottlenecks, capacity gaps, work-life imbalances, and preferred tools. Gain actionable insights to optimize workforce performance and employee well-being./,
          ),
          image: page.locator("img#a58ac646-008a-4739-acdc-25fd479f95aa"),
        },
      ],
      [
        "teamPerformanceRetention",
        {
          heading: page.getByText("Enhance Team Performance & Retention"),
          briefText: page.getByText(
            /Boost revenue by balancing workforce well-being and increasing productivity. Implement processes and behavior shifts for engaged teams, efficient tool usage, and effective work output./,
          ),
          image: page.locator("img#8ad387fb-a98f-429d-89e7-5e7d5da5d60c"),
        },
      ],
      [
        "peaceOfMind",
        {
          heading: page.getByText("Get Peace of Mind"),
          briefText: page.getByText(
            /Getting a deep understanding of how your workforce operates allows you and your business to eliminate distractions, be more effective and reduce anxiety/,
          ),
          image: page.locator("img#7e5bec77-8cd7-4cec-8e55-e936aa8ab2ad"),
        },
      ],
    ]);
  }

  async assertVisibility(sectionKey: string) {
    const section = this.sectionElements.get(sectionKey);
    if (section) {
      await expect(section.heading).toBeVisible();
      await expect(section.briefText).toBeVisible();
      if (section.image) {
        await expect(section.image).toBeVisible();
      }
    } else {
      throw new Error(`Section with key: ${sectionKey} not found.`);
    }
  }

  async assertElementsVisibility() {
    for (let key of this.sectionElements.keys()) {
      await this.assertVisibility(key);
    }
  }
}
