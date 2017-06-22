import { HttpInterceptorPage } from './app.po';

describe('http-interceptor App', () => {
  let page: HttpInterceptorPage;

  beforeEach(() => {
    page = new HttpInterceptorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
