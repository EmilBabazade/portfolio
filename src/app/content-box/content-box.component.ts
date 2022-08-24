import { Component, Input, OnInit } from '@angular/core';
import { IContentBox } from '../IContentBox';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {
  @Input() model!: IContentBox;
  name: string = '';
  skills: string = '';
  startDate?: string;
  endDate?: string;
  content: string = '';

  constructor() { }

  ngOnInit(): void {
    this.name = this.model.name;
    this.skills = this.model.skills;
    this.startDate = this.model.startDate;
    this.endDate = this.model.endDate;
    this.content = this.model.content;
  }

}
