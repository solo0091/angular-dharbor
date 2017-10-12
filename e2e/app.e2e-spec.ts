import { AngularDharborPage } from './app.po';

describe('angular-dharbor App', () => {
  let page: AngularDharborPage;

  beforeEach(() => {
    page = new AngularDharborPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to adh!!');
  });
});
