// Native Angular
import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';

// Rxjs
import { filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  title: string;
  metaTag: MetaDefinition;

  constructor( 
    private router: Router,
    private titlePage: Title,
    private meta: Meta
    ) {
    this.getDataRoute().subscribe( data => {
        this.title = data.title
        this.titlePage.setTitle( `AdminPro - ${this.title}` );

        this.metaTag = {
          name: 'description',
          content: this.title
        }

        this.meta.updateTag( this.metaTag );
       
    });
   }

  ngOnInit() {
  }

  getDataRoute(): Observable<any> {
   return this.router.events
              .pipe(
                filter( event => event instanceof ActivationEnd ),
                filter( ( event: ActivationEnd ) => event.snapshot.firstChild === null ),
                map( ( event: ActivationEnd ) => event.snapshot.data )
              )
    
  }

}
