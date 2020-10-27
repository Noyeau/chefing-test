import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from '../dialogs/information-dialog/information-dialog.component';
import { FormDialogComponent } from '../dialogs/form-dialog/form-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

constructor(
  public dialog: MatDialog
) { }



openInformation(title=null, text=null, callback=null){
  const dialogRef = this.dialog.open(InformationDialogComponent, {
    width: '250px',
    data: {title, text}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if(callback){
      callback(result)
    }
  });
}


openForm(data,title=null, callback=null){
  const dialogRef = this.dialog.open(FormDialogComponent, {
    width: '300px',
    data:{data, title}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if(callback){
      callback(result)
    }
  });
}
}
