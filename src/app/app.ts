import { AfterContentInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Proficiency } from './classes/proficiency';
import { Qualification } from './classes/qualification';
import { Language } from './classes/language';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    GameShowcase,
    FontAwesomeModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  faGithub = faGithub;
  faTwitter = faTwitter;
  faYoutube = faYoutube;


  protected readonly title = signal('portfolio');
  protected readonly skills: ProgrammingLanguage[] = [
    new ProgrammingLanguage("C#", "The company, where i used to work at, primarily used C# as their programming language of choice. By proxy i was able to pickup most things used in day to day usage, granting me the ability to create and manage fully functional backends for my websites."),
    new ProgrammingLanguage("TypeScript", "TypeScript is my programming language of choice when it comes to the logic behind websites. Im pretty confident in my abilities in creating Algorithims that are easy to understand and work with."),
    new ProgrammingLanguage("MSSQL", "MSSQL was the Query Language used by my company, although having worked with Entity Framework primarily i still know some things that enable me to write basic queries."),
    new ProgrammingLanguage("HTML / CSS", "HTML, aswell as CSS, are a baseline requirement for working with websites. I would proclaim that i have a stronger understanding of it than most other programmers. Allowing me to create advanced websites, suiting most needs."),
  ];
  protected readonly proficiencies: Proficiency[] = [
    new Proficiency("Game Design and Creation", "Game Design and Creation is what i do primarily as a hobby. I started learning programming using GameMakerStudio2 and still do from time to time."),
    new Proficiency("Web Development", "I love developing websites as it is what the user actually interacts with. This is what i did the most and feel most confident in doing."),
    new Proficiency("Database Creation and Management", "During my Apprenticeship i created and management Databases to hold data required for the programs of my Company."),
    new Proficiency("Basic Server Management", "An Apprentice of Software Development gets basic Server Management teached, using this knowledge i am able to use most linux distributions without many issues."),
  ];
  protected readonly socials = [
    new Social("GitHub", "https://Github.com/Kl3XY", faGithub),
    new Social("Twitter", "https://x.com/Kl3XY", faTwitter),
    new Social("Youtube", "https://www.youtube.com/@Kl3XY_DEV", faYoutube),
  ]
  protected readonly languages: Language[] = [
    new Language("German (Mother Tongue)", "Im fluent in German. I also have a german work permit."),
    new Language("English (est. C1)", "Im fluent in English and feel confident in speaking and writing."),
    new Language("Polish (est. A1)", "Im of Polish Heritage, yet i dont speak the language but im capable of understanding spoken words."),
  ]
  protected readonly qualification: Qualification[] = [
    new Qualification("Software Developer", "2023 - 2026", "Primarily worked with complex Web-Application of any sort. This is where i learned most about programming.", "4.0"),
    new Qualification("Game Design Club", "2024 - 2026", "As a part of my hobby i joined the Game Design club of my school where i led one of the projects which are now being used to display the clubs progress.", "N/A"),
    new Qualification("Technical Product Designer", "2023 - 2026", "N/A", "GPA 3.0"),
    new Qualification("Certificate of Secondary Education", "2013 - 2019", "N/A", "GPA 3.5"),
  ]
  protected readonly lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,'

  games: Game[] = [];
  isLoadingGames = true;

  async ngOnInit(): Promise<void> {
    
  }

}
