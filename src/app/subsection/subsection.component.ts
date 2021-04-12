import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as data from './childData.json';
import { RatingModule } from 'ng-starrating';
import { StarRatingComponent } from 'ng-starrating';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})
export class SubsectionComponent implements OnChanges {

  showMenu : boolean = false;
  details: any = (data as any).default;
  detail: any = null;

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  @Input()
  productId

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes['productId'].currentValue;
    this.detail = this.details.filter(p => p.id == id).pop();

  }
  isShown: boolean = false ; // hidden by default


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }

  showMenuToggle(){
    this.showMenu = true;
    alert(this.showMenu);
  }

}
