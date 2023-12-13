import { Component } from "@angular/core";

@Component({
selector:'app-home',
template:`
<h1>Hello from homecomponent!</h1>
`,
styles: `
h1{
    font-size:70px;
    color: white;
    background-color: brown;
}
`
})

export class HomeComponent{}