import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface DandDlabel {
  value: string;
  color: string;
}
interface DandDList {
  bigName: string;
  // smallName: string;
  color: string;
  labels: DandDlabel[];
}

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.scss'],
})
export class Stage2Component {

  task: DandDList = {
    bigName: 'Story',
    color: 'blue',
    labels:[
      {value: 'authentificate', color: 'red'},
      {value: 'add admin', color: 'orange'}, 
      { value: 'manage product', color: 'yellow'},
    ],
  };

  todo: DandDList = {
    bigName: 'Release 1',
    // smallName: 'this text is small',
    color: 'purpule',
    labels: [
      { value: 'handle erreurs', color: 'red' },
      { value: 'use console.log', color: 'blue' },
      { value: 'fix erreurs', color: 'green' },
      { value: 'fix erreurs', color: 'green' },
      { value: 'fix erreurs', color: 'green' },
    ],
  };
  inPrograss: DandDList = {
    bigName: 'Release 2',
    // smallName: 'this text is small',
    color: 'black',
    labels: [
      { value: 'handle erreurs', color: 'red' },
      { value: 'use console.log', color: 'blue' },
      { value: 'fix erreurs', color: 'green' },
      { value: 'fix erreurs', color: 'green' },
    ],
  };

  done: DandDList = {
    bigName: 'Release 3',
    // smallName: 'this text is small',
    color: 'blue',
    labels: [
      { value: 'handle erreurs', color: 'red' },
      { value: 'use console.log', color: 'blue' },
      { value: 'fix erreurs', color: 'green' },
    ],
  };

  drop(event: CdkDragDrop<DandDlabel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}