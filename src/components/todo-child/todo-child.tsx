import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'todo-child',
  styleUrl: 'todo-child.css',
  shadow: true,
})
export class TodoChild {
  @Prop() title: string;
  @Prop() text: string;

  render() {
    return (
      <div class="todo-child">
        <h1>{this.title}</h1>
        <p>{this.text}</p>
      </div>
    );
  }
}
