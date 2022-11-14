import { defaulttest } from './defaultTest';
import { CardPokeComponent } from './card-poke.component';
import { render, screen } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

const defaultProps = {
  POKEMON: defaulttest
}

const sut = async () => {
  await render(CardPokeComponent, {
    componentProperties: defaultProps,
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

describe('CardComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should render the component', async () => {
    const element = screen.getByTestId('rootcard');
    expect(element).toBeTruthy();
  });
});
