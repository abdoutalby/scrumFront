import { Component, OnInit } from '@angular/core';

export interface Mumber {
  name: string;
  password: string;
  score: number;
}

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {

   mumber: Mumber[] = [
    { score: 2, name: 'user1', password: 'string1' },
    { score: 0, name: 'user2', password: 'string2' },
    { score: 4, name: 'user3', password: 'string1' },
    { score: 4, name: 'user4', password: 'string1' },
    { score: 4, name: 'user5', password: 'string1' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
