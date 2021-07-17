import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatediscount',
  templateUrl: './updatediscount.component.html',
  styleUrls: ['./updatediscount.component.css']
})
export class UpdatediscountComponent implements OnInit {

  reloadUrl : string ="";

  constructor(private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadUrl = this.route.snapshot.params['urlLink'];
    this.reload();
  }

  reload(){
    alert(this.reloadUrl);
    this.router.navigateByUrl(this.reloadUrl);
  }
}
