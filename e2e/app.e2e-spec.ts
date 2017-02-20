import { JwtClientPage } from './app.po';

describe('jwt-client App', function() {
  let page: JwtClientPage;

  beforeEach(() => {
    page = new JwtClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
