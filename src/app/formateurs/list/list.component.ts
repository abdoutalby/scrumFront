import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  formateurs = [
    {id : 1 ,
      name : "foulen ",
      email : "foulen@gmail.com",
            
    },
    {id : 1 ,
      name : "foulen ",
      email : "foulen@gmail.com",
            
    },
    {id : 1 ,
      name : "foulen ",
      email : "foulen@gmail.com",
            
    },  {id : 1 ,
      name : "foulen ",
      email : "foulen@gmail.com",
            
    }

  ]

  displayedColumns: string[] = ['id', 'name', 'email' , 'actions' ];
  dataSource :any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.formateurs;
  }

}
