import { Injectable } from '@angular/core';
import { AdmProduct } from '../interfaces/admin-product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  products:Array<AdmProduct> = [
    {
      id:1,
      categoriesId: 1,
      productName: "Chamonix Motivon Snowboard 2020",
      type:'Powder, Freeride, All Mountain',
      description:"Equally at home on the steeps as it is in the deep powder and tree lines, the Motivon is for the big mountain guru who requires a deck that can transition through all conditions with precison. The Motivon's directional shape has a slight taper in the tail that makes this board perfect for sinking the tail in deeper snow, to create a surf-like feel. The subtle camber profile allows the deck to boast plenty of torsional flex to provide a playful feel underfoot while keeping true to its roots by giving the rider extra pop and sufficient edge hold throughout the board. The Motivon is the tool of choice for riders looking to accelerate their riding through the bottomless powder fields and the unnerving peaks of the greater mountainous regions.",
      size:'166 cm',
      width:'Regular',
      laminates:'Fiberglass, w/ Carbon Stringers',
      level:'Advanced, Intermediate',
      price: 330,
      image:'https://firebasestorage.googleapis.com/v0/b/snowshop-829da.appspot.com/o/images%2F3.jpg?alt=media&token=2e00231b-5289-4538-ae6a-2e40f9abbfa6',
    }
  ]
  private url:string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/products';
   }
   getProducts():Array<AdmProduct>{
    return this.products;
  }

  getJSONProducts(withCategory = false): Observable<Array<AdmProduct>>{
    let url = this.url;
    if(withCategory){
      url += '?_expand=categories';
    }
    return this.http.get<Array<AdmProduct>>(url);
  }
  addJSONProducts(product: AdmProduct):Observable<Array<AdmProduct>>{
    return this.http.post<Array<AdmProduct>>(this.url, product);
  }
  deleteJSONProducts(id: number):Observable<Array<AdmProduct>>{
    return this.http.delete<Array<AdmProduct>>(`${this.url}/${id}`);
  }
  updateJSONProducts(product: AdmProduct):Observable<Array<AdmProduct>>{
    return this.http.put<Array<AdmProduct>>(`${this.url}/${product.id}`, product);
  }
  getJSONOneProduct(id:number):Observable<AdmProduct>{
    return this.http.get<AdmProduct>(`${this.url}/${id}`)
  }
}
