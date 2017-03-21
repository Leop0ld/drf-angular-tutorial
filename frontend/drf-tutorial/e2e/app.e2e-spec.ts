import { DrfTutorialPage } from './app.po';

describe('drf-tutorial App', function() {
  let page: DrfTutorialPage;

  beforeEach(() => {
    page = new DrfTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
