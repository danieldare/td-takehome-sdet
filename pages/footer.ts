import { Page, expect } from "@playwright/test";

export class Footer {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private async assertLinkVisibility(name: string, columnName: string, exact = false) {
    try {
      await expect(this.page.getByRole("link", { name, exact })).toBeVisible();
    } catch (error) {
      throw new Error(
        `Failed to find visible element: with name '${name}' in column '${columnName}'`,
      );
    }
  }

  private async assertHeadingVisibility(name: string) {
    try {
      await expect(
        this.page
          .getByTestId(`footer-accordion-header-${name.toLowerCase()}`)
          .getByRole("heading", { name }),
      ).toBeVisible();
    } catch (error) {
      throw new Error(`Visibility check failed for heading '${name}'`);
    }
  }

  private async assertColumnVisible(
    columnName: string,
    links: Array<{ name: string; exact?: boolean }>,
  ) {
    await this.assertHeadingVisibility(columnName);
    for (const link of links) {
      await this.assertLinkVisibility(link.name, columnName, link.exact);
    }
  }

  private async assertGeneralColumn() {
    await this.assertColumnVisible("General", [
      { name: "Pricing" },
      { name: "Customer Reviews" },
      { name: "Blog" },
      { name: "Resources" },
      { name: "Benchmarking Tool" },
    ]);
    await expect(this.page.getByTestId("request-demo")).toBeVisible();
  }

  private async assertFeaturesColumn() {
    await this.assertColumnVisible("Features", [
      { name: "All Features" },
      { name: "Time Tracking" },
      { name: "Payroll" },
      { name: "Timesheets" },
      { name: "Time Management" },
      { name: "Screen Monitoring" },
      { name: "Employee Productivity" },
      { name: "Attendance" },
    ]);
  }

  private async assertContactColumn() {
    await this.assertColumnVisible("Contact", [
      { name: "Help Center" },
      { name: "Partner Programs" },
      { name: "Contact Us" },
      { name: "Uptime Status" },
      { name: "About Us" },
      { name: "Jobs" },
    ]);
  }

  private async assertByIndustryColumn() {
    await this.assertColumnVisible("By Industry", [
      { name: "CX & Contact Centers" },
      { name: "BPO & KPO" },
      { name: "Staff Leasing" },
      { name: "Technology Providers" },
      { name: "Agencies" },
    ]);
  }

  private async assertByUseCaseColumn() {
    await this.assertColumnVisible("By Use Case", [
      { name: "Accountability" },
      { name: "Productivity", exact: true },
      { name: "Profitability" },
      { name: "Empowering Employees" },
    ]);
  }

  private async assertByWorkforceTypeColumn() {
    await this.assertColumnVisible("By Workforce Type", [
      { name: "Fully Remote Teams" },
      { name: "Hybrid Workforce" },
      { name: "In-Office" },
      { name: "Enterprise" },
      { name: "SME & SMB" },
    ]);
  }

  private async assertIntegrationsRow() {
    await this.assertColumnVisible("Integrations", [
      { name: "JIRA" },
      { name: "Asana" },
      { name: "Trello" },
      { name: "G Suite" },
      { name: "Monday" },
      { name: "Intercom" },
      { name: "Office 365" },
      { name: "Salesforce" },
      { name: "Slack" },
      { name: "Todoist" },
      { name: "API" },
      { name: "See All 60+ Integrations" },
    ]);
  }

  private async assertSecurityDetails() {
    await this.assertLinkVisibility("Security & Compliance", "Security Details");
    await this.assertLinkVisibility("GDPR", "Security Details");
    await this.assertLinkVisibility("ISO 27001:", "Security Details");
    await this.assertLinkVisibility("SLA", "Security Details", true);
  }

  private async assertSocialMediaLinks() {
    await this.assertLinkVisibility("facebook link", "Social Media");
    await this.assertLinkVisibility("twitter link", "Social Media");
    await this.assertLinkVisibility("linkedin link", "Social Media");
    await this.assertLinkVisibility("instagram link", "Social Media");
  }

  public async assertElementsVisibility() {
    try {
      await Promise.all([
        this.assertGeneralColumn(),
        this.assertFeaturesColumn(),
        this.assertContactColumn(),
        this.assertByIndustryColumn(),
        this.assertByUseCaseColumn(),
        this.assertByWorkforceTypeColumn(),
        this.assertIntegrationsRow(),
        this.assertSecurityDetails(),
        this.assertSocialMediaLinks(),
      ]);
    } catch (error) {
      throw error;
    }
  }
}
