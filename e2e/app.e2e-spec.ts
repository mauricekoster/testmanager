import { MkTestmanagerPage } from './app.po';

describe('mk-testmanager App', function() {
  let page: MkTestmanagerPage;

  beforeEach(() => {
    page = new MkTestmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
