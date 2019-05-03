import { Component } from '@angular/core';
import { Config, Chapter } from './accordion/types';

@Component({
  selector: 'my-app',
  template: `
    <h1>Table of Content</h1>
    <accordion 
      [options]="options" 
      [chaps]="chaps">
    </accordion>
  `
})
export class AppComponent {
  // signle open mode
  options: Config = { multi: false };

  chaps: Chapter[] = [
    {
      id:1,
      name: 'Chapter',
      isActive: true,
      isExpand: false,
      iconClass: 'fa fa-folder',
      pages:[
        {
          id:1,
          title: 'chapter page 1',
          url: '/sites/nylwiki/testwiki'
        }
      ],
      sections: [
        {
          id:1,
          name: 'Section',
          isActive: true, 
          pages:[
            {
              id:2,
              title: 'section page 1',
              url: '/sites/nylwiki/testwiki'
            }
          ],
          subSection: [
            {
              id:1,
              name: 'Sub Section',
              isActive: true, 
              pages:[
                {
                  id:3,
                  title: 'sub section page 1',
                  url: '/sites/nylwiki/testwiki'
                }
              ]
            },
            {
              id:2,
              name: 'Sub Section',
              isActive: false, 
              pages:[]
            },
            {
              id:3,
              name: 'Sub Section',
              isActive: false, 
              pages:[]
            }

          ]
        },
        {
          id:1,
          name: 'Section',
          isActive: true, 
          pages:[
            {
              id:2,
              title: 'section2 page 1',
              url: '/sites/nylwiki/testwiki'
            }
          ],
          subSection: []
        }
      ]
    },
    {
      id:1,
      name: 'Chapter',
      isActive: false,
      isExpand: false,
      iconClass: 'fa fa-folder',
      pages:[],
      sections: [
        {
          id:1,
          name: 'Section',
          isActive: true, 
          pages:[],
          subSection: []
        }
      ]
    } 
  ];
}
