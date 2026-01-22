import { AfterContentInit, Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { Game, Root } from './classes/game';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProgrammingLanguage } from './classes/programmingLanguage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { GameShowcase } from './game-showcase/game-showcase';
import { Social } from './classes/social';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faMailBulk, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faYoutube, faXing, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Proficiency } from './classes/proficiency';
import { Qualification } from './classes/qualification';
import { Language } from './classes/language';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import { Repo } from './classes/Repo';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    GameShowcase,
    FontAwesomeModule,
    MatRippleModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private _snackBar = inject(MatSnackBar);

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  faGithub = faGithub;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedIn = faLinkedin;
  faXTwitt = faXTwitter;
  faXing = faXing;
  faAt = faAt;


  protected readonly title = signal('portfolio');

  protected readonly socials = [
    new Social("GitHub", "https://Github.com/Kl3XY", faGithub),
    new Social("Twitter", "https://x.com/Kl3XY", faXTwitter),
    new Social("Youtube", "https://www.youtube.com/@Kl3XY_DEV", faYoutube),
    new Social("Xing", "https://www.xing.com/profile/Martin_Gaffke08994/web_profiles?nwt_nav=profile_icon", faXing),
    new Social("LinkedIn", "https://www.linkedin.com/in/martin-gaffke-0408b5250/?skipRedirect=true", faLinkedin),
  ]

  profs = [
    "GameMaker",
    "Godot",
    "Unity",
    "C#",
    "C++",
    "Java",
    "Spring",
  ]

  protected readonly werke: String[] = [
    "2025: Teilnahme am InnoGames Game Jam 2025",
    "2025: Teilnahme am GameMaker's Toolkit Game Jam 2025.2",
    "2025: Teilnahme am Brackeys Game Jam 2025",
    "2024 - 2026: Teilnahme am Future Training Company Game Design Kurs",
    "2023: Erste Freelancing erfahrung als Programmer for Hire"
  ]

  isLoadingRepositories = true;
  
  games: Root | undefined;
  Repositories: Repo[] = [];
  isLoadingGames = true;
  Me: User | undefined;
  async ngOnInit(): Promise<void> {
    await this.http.get<Repo[]>("https://api.github.com/users/kl3xy/repos").subscribe((data) => {
      this.Repositories = data;
      this.cdr.markForCheck();
      this.isLoadingRepositories = false;
    })
    await this.http.get<User>("https://api.github.com/users/kl3xy").subscribe((data) => {
      this.Me = data;
    })
  
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: "smooth"});
  }

  scrollToTargetAdjusted(element: HTMLElement){
      var headerOffset = 45;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open("Kopiert!", "Schließen");
  }

}
