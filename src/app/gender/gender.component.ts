import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {
  @Input()isUpSelected : boolean;
  @Input()isDownSelected: boolean;
  

  onUpClick(){
      this.isUpSelected = !this.isUpSelected;
      this.isDownSelected =!this.isUpSelected
      // if(!this.isUpSelected)
      // this.isDownSelected = !this.isDownSelected;
  }
  onDownClick(){
    this.isDownSelected = !this.isDownSelected;
    this.isUpSelected = !this.isDownSelected;
  }
}
