import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnDestroy,  OnChanges,  OnInit {

  constructor() { }
  ngOnDestroy(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
