import { browser, by, element } from 'protractor';

export class AngularDharborPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('adh-root h1')).getText();
  }
}
