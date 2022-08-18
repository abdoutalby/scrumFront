import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RoomService } from 'src/app/services/room.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit  , OnDestroy{
  players: any[] = [];
  public form!: FormGroup;
  idRoom: string = '';
  @Output()
  LoginEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private socket: SocketService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.idRoom = this.activeRoute.snapshot.params['id'];

    this.getRoomPlayers();
    this.initFormBuilder();
  }

  getRoomPlayers() {
    this.roomService.getRoomPlayers(this.idRoom).subscribe({
      next: (res: any) => {
        this.players = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  private initFormBuilder(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(4)]],
    });
  }
  public errorMessage(formControlName: string, email?: boolean): string | void {
    if (this.form.controls[formControlName]?.errors?.['required']) {
      return 'Champ obligatoire';
    }
  }
  login() {
    console.log(this.players);

    const user = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    const player = this.players.filter(
      (p) => p.username === user.username && p.password === user.password
    );
    if (player.length > 0) {
      const e = {
        user: user,
        room: this.idRoom,
      };
      this.LoginEvent.emit(e);
     } else {
      this.snack.open('you are not a member of this room', 'dismiss');
    }
  }
  ngOnDestroy(){
      console.log('destroyed')
  }
}
