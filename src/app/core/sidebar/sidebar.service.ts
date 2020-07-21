import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Dashboard', url: '/panel' },
        { title: 'Progress', url: 'progress' },
        { title: 'Graficas', url: 'graficas' },
        { title: 'Promesas', url: 'promises' },
        { title: 'Rxjs', url: 'rxjs' }
      ]
    }
  ]

  constructor() { }
}
