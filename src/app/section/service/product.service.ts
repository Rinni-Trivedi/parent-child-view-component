import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetail } from '../model/productModel';
import * as data from './childData.json';


@Injectable()
export class ProductService {

  private productDetailSource = new BehaviorSubject<Array<ProductDetail>>((data as any).default);
  
  get productDetail$() {return this.productDetailSource.asObservable();}

  constructor() { }

  updatedDataSelection(data: Array<ProductDetail>){
    this.productDetailSource.next(data);
  }
  
}