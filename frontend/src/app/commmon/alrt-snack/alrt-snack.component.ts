import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alrt-snack',
  templateUrl: './alrt-snack.component.html',
  styleUrls: ['./alrt-snack.component.css']
})
export class AlrtSnackComponent implements OnInit {
msg = '';

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private _snackRef: MatSnackBarRef<AlrtSnackComponent>,
  ) { 
    console.log('MAT_SNACK_BAR_DATA data',data)
    this.msg = data
  }

  ngOnInit(): void {
  }

}
