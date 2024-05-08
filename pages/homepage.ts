import { type Page } from "@playwright/test";
import { HeroSection } from "./hero-section";
import { NavBar } from "./navbar";
import { OurSolution } from "./our-solution";
import { TryTimeDoctor } from "./try-time-doctor";
import { Footer } from "./footer";
import { HowTimeDoctorWorks } from "./how-time-doctor-works";

export class HomePage {
  readonly page: Page;
  readonly navbar: NavBar;
  readonly heroSection: HeroSection;
  readonly ourSolution: OurSolution;
  readonly howTimeDoctorWorks: HowTimeDoctorWorks;
  readonly tryTimeDoctor: TryTimeDoctor;
  readonly footer: Footer;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new NavBar(page);
    this.heroSection = new HeroSection(page);
    this.ourSolution = new OurSolution(page);
    this.howTimeDoctorWorks = new HowTimeDoctorWorks(page);
    this.tryTimeDoctor = new TryTimeDoctor(page);
    this.footer = new Footer(page);
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}
