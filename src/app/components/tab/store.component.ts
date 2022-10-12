import { Platform } from '@angular/cdk/platform';
import { Component, } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-store',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class StoreComponent extends TabComponent {
  constructor(platform: Platform) {
    super(platform);
    this.apps = [{
      key: 'edeka',
      logo: 'edeka_logo.png',
      refer: false,
      web: 'https://www.edeka.de/services/edeka-app/herunterladen-vorteile-sichern/edeka_app.jsp',
      android: 'https://app.adjust.com/bum9fuw',
      ios: 'https://app.adjust.com/bum9fuw'
    }, {
      key: 'lidl',
      logo: 'lidl_logo.svg',
      refer: false,
      web: 'https://www.lidl.de/c/lidl-plus/s10007388',
      android: 'https://app.adjust.com/f0ymwua',
      ios: 'https://apps.apple.com/app/id1238611143?mt=8'
    }, {
      key: 'penny',
      logo: 'penny_logo.svg',
      background: '#cd1414',
      refer: false,
      web: 'https://www.penny.de/penny-app',
      android: 'https://app.adjust.com/u95vi08_mrnrcb7',
      ios: 'https://app.adjust.com/u95vi08_mrnrcb7'
    }, {
      key: 'rewe',
      logo: 'rewe_logo.svg',
      refer: false,
      web: 'https://www.rewe.de/service/app/',
      android: 'https://app.adjust.com/yioykc1?deep_link=rewe%3A%2F%2F&label=ONS',
      ios: 'https://app.adjust.com/jsr?url=https%3A%2F%2Fj89v.adj.st%3Fadj_t%3D7ddpi19%26adj_label%3DONS'
    }];
  }

}
