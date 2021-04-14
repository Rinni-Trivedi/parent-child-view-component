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
  iconImageSrc = './assets/plus.png';
  isIcon = true;
  closeResult: string;

  @Input()
  productId

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes['productId'].currentValue;
    this.detail = this.details.filter(p => p.id == id).pop();

  }
  isShown: boolean = false ; // hidden by default


  // toggleShow(imageNameObject: { src: string; }) {
  // this.isShown = ! this.isShown;
  // this.iconImageSrc = imageNameObject.src;
  // }
  toggleShow(imageNameObject: { src: string; }) {
    this.isShown = ! this.isShown;
    this.isIcon =! this.isIcon;
    if(this.isIcon){
      this.iconImageSrc = './assets/plus.png'
    }
    else {
      this.iconImageSrc = './assets/close.png'
    }
    }

  showMenuToggle(){
    this.showMenu = true;
    alert(this.showMenu);
  }

}
