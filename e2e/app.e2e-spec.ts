import { Angularattack2017luisjoseespiralPage } from './app.po';

describe('angularattack2017luisjoseespiral App', () => {
  let page: Angularattack2017luisjoseespiralPage;

  beforeEach(() => {
    page = new Angularattack2017luisjoseespiralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
