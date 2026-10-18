import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const req = httpMock.expectOne(
      (request) =>
        request.url === 'https://jsonplaceholder.typicode.com/posts' &&
        request.params.get('_limit') === '5'
    );
    req.flush([{ id: 1, userId: 1, title: 'Post demo', body: 'Contenido demo' }]);

    await fixture.whenStable();

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render API explorer title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const req = httpMock.expectOne(
      (request) =>
        request.url === 'https://jsonplaceholder.typicode.com/posts' &&
        request.params.get('_limit') === '5'
    );
    req.flush([{ id: 1, userId: 1, title: 'Post demo', body: 'Contenido demo' }]);

    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('JSONPlaceholder API Explorer');
    expect(compiled.textContent).toContain('Post demo');
  });
});
