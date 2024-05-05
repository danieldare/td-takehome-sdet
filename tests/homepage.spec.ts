import { test } from "@playwright/test";
import { HomePage } from "../pages/homepage";

test.describe("Time Doctor Homepage", () => {
  test("should display all essential elements in sections", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate("https://www.timedoctor.com/");

    await homePage.header.assertHeaderElementsVisibility();
    await homePage.heroSection.assertHeroSectionElementsVisibility();
  });
});
