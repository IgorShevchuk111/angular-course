import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';


@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }

  
}
