import { SearchComponent } from './search.component';
import { render, screen } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

const sut = async () => {
  await render(SearchComponent, {
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NoopAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
    ],
  });
};

describe('SearchComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should render the component', async () => {
    const element = screen.getByTestId('rootsearch');
    expect(element).toBeTruthy();
  });
});
