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
  isLoadingGames = true;
  games: Game[] = [];

  async ngOnInit(): Promise<void> {
    await this.http.get<Root>("https://api.kl3xy.dev/get-games").subscribe((data) => {
      this.games = data.games
      console.log(this.games)
      this.cd.markForCheck();
      this.isLoadingGames = false;
    })
  }

  getGameRoot(): Observable<Root> {
    return this.http.get<Root>('http://85.214.6.105:5000/get-games')
  }
}
