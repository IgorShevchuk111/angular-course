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
        this.mov = "TwoWayBinding";
      break;
      case 3: 
        this.mov = "DirectiveNgStyle";
      break;
      case 4: 
        this.mov = "DynamicNgClass";
      break;
      case 5: 
        this.mov = "ShowNgIfElse";
      break;
      case 6: 
        this.mov = "NgSwitch";
      break;
      case 7: 
        this.mov = "NgFor";
      break;
      case 8: 
        this.mov = "Pipes";
      break;
      case 9: 
        this.mov = "PostForm";
      break;

      default:
        this.mov = "/";
      break;
    }
    this.router.navigate([this.mov])
  }

}

