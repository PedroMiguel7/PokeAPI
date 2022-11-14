import { SidebarComponent } from './sidebar.component';
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
  await render(SidebarComponent, {
    componentProperties: { showSidebar: true },
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

describe('SidebarComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should render the component', async () => {
    const element = screen.getByTestId('rootsidebar');
    expect(element).toBeTruthy();
  });
});
