import {html, render, TemplateResult} from 'lit-html';

function clickMe(event: MouseEvent) {
  alert(`Hello! (event: ${event}`);
}

function sayHello(): TemplateResult {
  return html`<button @click="${clickMe}">Click me</button>`;
}

render(sayHello(), document.body);

