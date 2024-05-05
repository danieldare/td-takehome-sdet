// pages/homepage.ts
import { Page } from "@playwright/test";
import { Header } from "../components/header";
import {HeroSection} from "../components/hero-section";


export class HomePage {
  readonly header: Header;
  readonly heroSection: HeroSection;

  constructor(page: Page) {
    this.header = new Header(page);
    this.heroSection = new HeroSection(page);
  }

  async navigate(url: string) {
    await this.header.page.goto(url);
  }
}
