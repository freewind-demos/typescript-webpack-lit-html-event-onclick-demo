import {html, render, TemplateResult} from 'lit-html';

function clickMe() {
  alert('Hello!')
}

function sayHello(): TemplateResult {
  return html`<button @click="${clickMe}">Click me</button>`;
}

render(sayHello(), document.body);

