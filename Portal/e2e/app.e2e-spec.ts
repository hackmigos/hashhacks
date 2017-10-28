import { TimeTablePage } from './app.po';

describe('time-table App', () => {
  let page: TimeTablePage;

  beforeEach(() => {
    page = new TimeTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
