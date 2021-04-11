import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as data from './childData.json';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})
export class SubsectionComponent implements OnChanges {


  details: any = (data as any).default;
  detail: any = null;

  @Input()
  productId

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes['productId'].currentValue;
    this.detail = this.details.filter(p => p.id == id).pop();

  }

}
