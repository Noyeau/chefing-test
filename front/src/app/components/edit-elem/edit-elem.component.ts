import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-elem',
  templateUrl: './edit-elem.component.html',
  styleUrls: ['./edit-elem.component.css']
})
export class EditElemComponent implements OnInit {
  public form = new FormGroup({
    _id: new FormControl(null),
    label: new FormControl(null, [Validators.required]),
    finish: new FormControl(false),
  })

  public askDelete=false

  @Input() set datas(data){
    if(data){
      console.log(data)
      this.form.patchValue(data)
      console.log(this.form)
    }
  };

  @Output() valid=new EventEmitter()

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
   
  }

  annuler(){
    this.valid.emit(true)
  }


  send(){
    this.listService.saveElem(this.form.value).subscribe(res=>{
      console.log(res)
      this.valid.emit(true)
    })
  }

  delete(){
    this.listService.deleteElem(this.form.value._id).subscribe(res=>{
      console.log(res)
      this.valid.emit(true)
    })
  }

}
