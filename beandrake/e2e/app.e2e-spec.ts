import { BeandrakePage } from './app.po';

describe('beandrake App', () => {
  let page: BeandrakePage;

  beforeEach(() => {
    page = new BeandrakePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
