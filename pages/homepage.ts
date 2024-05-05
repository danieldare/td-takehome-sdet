import { type Page } from "@playwright/test";
import {HeroSection} from "./hero-section";
import { NavBar } from "./navbar";


export class HomePage {
  readonly header: NavBar;
  readonly heroSection: HeroSection;

  constructor(page: Page) {
    this.header = new NavBar(page);
    this.heroSection = new HeroSection(page);
  }

  async navigate(url: string) {
    await this.header.page.goto(url);
  }
}
