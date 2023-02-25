import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.scss']
})
export class ContentTitleComponent implements OnInit {
 title: string = '';
 i: number;
 a='/binding-img';
 mov: string

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
     const title = this.contentService.getTitleByi(params['i'])
     this.title = title;
     this.i = params['i']
    } )
  }

  openContent() {
    switch (+this.i) {
      case 0: 
        this.mov = "binding-img";
      break;
      case 1: 
        this.mov = "EventBinding";
      break;
      case 2: 
        this.mov = "2way-binding";
      break;

      default:
        this.mov = "/";
      break;
    }
    this.router.navigate([this.mov])
  }

}

