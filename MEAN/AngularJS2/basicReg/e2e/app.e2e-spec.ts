import { BasicRegPage } from './app.po';

describe('basic-reg App', () => {
  let page: BasicRegPage;

  beforeEach(() => {
    page = new BasicRegPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
