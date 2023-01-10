import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { IContentBox } from '../IContentBox';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {
  @Input() model!: IContentBox;
  name: string = '';
  skills?: string;
  startDate?: string;
  endDate?: string;
  content?: string = '';
  source?: string;
  url?: string;
  fileUrl?: string;
  onlyDate?: string;
  list?: string[];

  faGithub = faGithub;
  faGlobe = faGlobe;
  faFileArrowDown = faFileArrowDown;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.name = this.model.name;
    this.skills = this.model.skills;
    this.startDate = this.model.startDate;
    this.endDate = this.model.endDate;
    this.content = this.model.content;
    this.source = this.model.source;
    this.url = this.model.url;
    this.fileUrl = this.model.fileUrl;
    this.onlyDate = this.model.onlyDate;
    this.list = this.model.list;
  }

  downloadFile() {
    if(!this.fileUrl) return;
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `../../assets/${this.fileUrl}`);
    link.setAttribute('download', this.fileUrl);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
