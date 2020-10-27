import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = []

  @Output() selectionChange=new EventEmitter()
  constructor(
    private listService: ListService,
    private dialogService: DialogService
  ) {
    this.listService.list.subscribe(res => {
      this.list = res
    })
  }

  ngOnInit() {

  }
  editElem(elem){
    console.log('edit', elem)
    this.dialogService.openForm(elem, "Modifiez l'élément")
  }
  selectElem(elem){
    this.selectionChange.emit(elem)
  }



  toogleFleg(elem){
    elem.finish = !elem.finish
    this.listService.saveElem(elem).subscribe()
  }




}
