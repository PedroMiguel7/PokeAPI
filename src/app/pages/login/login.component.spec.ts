
import { render, screen } from "@testing-library/angular";
import { LoginComponent } from "./login.component";

const sut = async () =>{
  await render(LoginComponent, {})
}

describe('AppComponent', () => {  

  beforeEach( async () => {
    await sut();
  })

  it('should render the component', async () => {
    const element = screen.getAllByTestId("rootmain")
    expect(element).toBeTruthy();
  })

})