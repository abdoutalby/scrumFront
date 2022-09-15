import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { User, USER } from '../models/user.model';

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.scss'],
})
export class Stage1Component implements OnInit {
  user: User[] = [];
  result: User[] = [];
  rightResponse: string[] = ['Developer', 'Designer', 'Web Dev'];
  points: any = null;

  constructor() {}

  ngOnInit(): void {
    this.user = USER;
  }

  drop(event: CdkDragDrop<User[]>) {
    if (this.result.length < this.rightResponse.length) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    if (this.result.length === this.rightResponse.length) {
      this.points = this.result.filter(
        (item) => !this.rightResponse.includes(item.job)
      ).length;
    }
  }

  getResult() {
    return this.points ? this.rightResponse.length - this.points : '';
  }
}
