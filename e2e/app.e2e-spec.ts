import { YoutuberPage } from './app.po';

describe('youtuber App', () => {
  let page: YoutuberPage;

  beforeEach(() => {
    page = new YoutuberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
