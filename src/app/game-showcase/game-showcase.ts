import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Root } from '../classes/game';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-game-showcase',
  imports: [
    MatProgressSpinner, 
    MatButton
  ],
  templateUrl: './game-showcase.html',
  styleUrl: './game-showcase.css',
})
export class GameShowcase implements OnInit{

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  loadingFailed = true;
  isLoadingGames = false;
  games: Game[] = [];

  ngOnInit(): void {
    this.games = [
      {
        short_text: "Embark on an Adventure to uncover the secrets of the Lands within Mathira",
        id: 1187149,
        title: "Almighty Shield",
        type: "default",
        url: "https://kl3xy.itch.io/almighty-shield",
        p_linux: false,
        cover_url: "https://img.itch.zone/aW1nLzg1Nzg3OTAucG5n/315x250%23c/RY8L71.png",
        downloads_count: 9,
        views_count: 380,
        p_android: false,
        published: true,
        earnings: [{ currency: "EUR", amount: 100, amount_formatted: "1.00€" }],
        purchases_count: 1,
        created_at: "2021-09-05 07:21:57",
        published_at: "2021-09-05 07:47:20",
        p_windows: false,
        p_osx: false,
        min_price: 0
      },
      {
        short_text: "Get ingredients to save your village.",
        id: 3850264,
        title: "Grocery Getting For A Plague.",
        type: "html",
        url: "https://kl3xy.itch.io/grocery-getting-for-a-plague",
        p_linux: false,
        cover_url: "https://img.itch.zone/aW1nLzIyOTYzODk1LnBuZw==/315x250%23c/5zGytk.png",
        downloads_count: 0,
        views_count: 49,
        p_android: false,
        published: true,
        earnings: [],
        purchases_count: 0,
        created_at: "2025-08-30 23:47:55",
        published_at: "2025-08-31 00:15:52",
        p_windows: false,
        p_osx: false,
        min_price: 0
      },
      {
        short_text: "Have don quixote as your cursor!",
        id: 4052289,
        title: "LC \"Don Quixote\" Cursor",
        type: "default",
        url: "https://kl3xy.itch.io/limbus-company-don-quixote-cursor",
        p_linux: false,
        cover_url: "https://img.itch.zone/aW1nLzI0MTU1ODAyLnBuZw==/315x250%23c/NeqqpX.png",
        downloads_count: 400,
        views_count: 890,
        p_android: false,
        published: true,
        earnings: [],
        purchases_count: 0,
        created_at: "2025-11-19 14:45:01",
        published_at: "2025-11-19 15:08:17",
        p_windows: false,
        p_osx: false,
        min_price: 0
      },
      {
        short_text: "Fight against evil loops in this \"Swarm Survivor\"",
        id: 3779798,
        title: "LOOP LOOITE",
        type: "html",
        url: "https://kl3xy.itch.io/loop-looite",
        p_linux: true,
        cover_url: "https://img.itch.zone/aW1nLzIyNDkzNzA4LnBuZw==/315x250%23c/6BZOC8.png",
        downloads_count: 1,
        views_count: 58,
        p_android: false,
        published: true,
        earnings: [],
        purchases_count: 0,
        created_at: "2025-08-03 11:44:08",
        published_at: "2025-08-03 12:11:20",
        p_windows: true,
        p_osx: false,
        min_price: 0
      },
      {
        short_text: "Shoot your way through asteroids!",
        id: 1476122,
        title: "Polaroid",
        type: "default",
        url: "https://kl3xy.itch.io/polaroidbeta",
        p_linux: false,
        cover_url: "https://img.itch.zone/aW1nLzg2MDk0NzAucG5n/315x250%23c/KqPLjm.png",
        downloads_count: 8,
        views_count: 43,
        p_android: false,
        published: true,
        earnings: [],
        purchases_count: 0,
        created_at: "2022-04-07 10:14:52",
        published_at: "2022-04-07 10:29:35",
        p_windows: false,
        p_osx: false,
        min_price: 0
      }
    ];
  }

  getGameRoot(): Observable<Root> {
    return this.http.get<Root>('http://85.214.6.105:5000/get-games')
  }
}
