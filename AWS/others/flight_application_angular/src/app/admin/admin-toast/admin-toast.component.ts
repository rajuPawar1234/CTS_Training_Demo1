import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminToastService } from '../service/admin-toast.service';

@Component({
  selector: 'admin-toasts',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: { '[class.ngb-toasts]': 'true' }
})
export class AdminToastComponent implements OnInit {

  constructor(public toastService: AdminToastService) { }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

  

  ngOnInit(): void {
  }

}
