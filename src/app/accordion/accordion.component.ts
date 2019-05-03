import { Component, OnInit, Input } from '@angular/core';
import { Config, Chapter } from './types';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() options;
  @Input() chaps: Chapter[];
  config: Config;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };
    return { ...config, ...options };
  }

  toggle(obj: any, index: number) {    
    obj.filter((menu, i) => i !== index).forEach(menu=> menu.isExpand = false);
    obj[index].isExpand = !obj[index].isExpand;


    // submenu
    // if (!this.config.multi) {
    //   this.chaps.filter(
    //     (menu, i) => i !== index && menu.active
    //   ).forEach(menu => menu.active = !menu.active);
    // } else {
    //   debugger
    // }

    // // Menu active
    // this.chaps[index].active = !this.chaps[index].active;
  }

  testMethod(index: number) {
    debugger
    // submenu
    
  }
}