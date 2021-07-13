import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
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
  discountPercentage : number =0;

  discount : Discount[] = [];

  constructor(private http : HttpClient,private adminService : AdminService) { }

  ngOnInit(): void {
    this.getAllDiscount();
  }

  getAllDiscount(){
    this,this.adminService.getAllDiscount().subscribe((res)=>{
      this.discount = res;
    })
  }

  addDiscount(){
    let dis = new Discount(this.id,this.discountName,this.discountPercentage);
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

  //disId : number = 0;
  disName : string = "";
  disPer : number = 0

  updateDiscount(id : number,disName : string,disPer :number){
    this.id = id;
    this.disName = disName;
    this.disPer = disPer;
  }

  updateDis(){
    let dis = new Discount(this.id,this.disName,this.disPer);
    console.log(dis);
    this.adminService.updateDiscount(this.id,dis).subscribe((res)=>{
      console.log(res);
      alert("Discount Updated Successfully..");
      window.location.reload();
    },
    error=>{
      console.log(error);
      
    });
  }

}
