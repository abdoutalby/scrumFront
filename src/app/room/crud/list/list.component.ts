import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, Subject, take, takeUntil, tap } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { ActionType, AddRoomComponent } from '../add-room/add-room.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  publicRooms: any[] = [];
  userRooms: any[] = [];
  memberRooms: any[] = [];
  user: any;

  loading = true;

  destroy$ = new Subject();

  constructor(
    private snack: MatSnackBar,
    private roomService: RoomService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getRooms();

    // this.authService.user$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(user => (this.user = user));
  }

  deleteRoom(id: string) {
    this.roomService.deleteRoom(id).subscribe({
      next: (res) => {
        this.snack.open('room Deleted ', 'OK');
        this.getRooms();
      },
    });
  }

  getRooms() {
    this.loading = true 
    this.roomService.getRooms().subscribe({
      next: (res: any) => {
        this.publicRooms = res;
        this.loading = false;
        console.log(res);
      },
    });
  }

  openCreateDialog() {
    const dialog = this.dialog.open(AddRoomComponent, {
      data: {
        type: ActionType.Create,
      },
    });
  }
}
