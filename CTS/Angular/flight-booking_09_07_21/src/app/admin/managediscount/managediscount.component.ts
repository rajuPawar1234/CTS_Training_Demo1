import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommomserviceService } from 'src/app/commomservice.service';
import { Discount } from 'src/app/Models/Discount';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-managediscount',
  templateUrl: './managediscount.component.html',
  styleUrls: ['./managediscount.component.css']
})
export class ManagediscountComponent implements OnInit {

  id : number  = 0;
  discountName : string = ""; 
  discountCode : string = "";
  discountPercentage : number =0;
  discountAmount : number = 0;

  discount : Discount[] = [];

  constructor(private http : HttpClient,private adminService : AdminService, private service : CommomserviceService) { }

  ngOnInit(): void {
    this.getAllDiscount();
  }

  getAllDiscount(){
    this,this.adminService.getAllDiscount().subscribe((res)=>{
      this.discount = res;
    })
  }

  addDiscount(){
    let dis = new Discount(this.id,this.discountName,this.discountCode,this.discountPercentage,this.discountAmount);
    this.adminService.addNewDiscount(dis).subscribe((res)=>{
      console.log(res);
      alert("Discount Added Successfully..");
      window.location.reload();
    })
  }

  deleteDiscount(id : number){
    this.adminService.deleteDiscount(id).subscribe((res)=>{
      alert("Discount Deleted Successfully..");
      window.location.reload();
    })
  }

}
