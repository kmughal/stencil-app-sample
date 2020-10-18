import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class TodoApp {
  titleInput!: HTMLInputElement;
  @State() title: String;

  textInput!: HTMLInputElement;
  @State() text: String;
  @Event({ eventName: 'todoAdded' }) todoAdded: EventEmitter<Object>;

  setText = (property: String, value: string) => {
    if (property == 'title') this.title = value;
    this.text = value;
  };

  handleClick = () => {
    this.todoAdded.emit({ title: this.title, text: this.text });
    this.titleInput.value = '';
    this.textInput.value = '';
    this.titleInput.focus();
  };

  render() {
    return (
      <div>
        Todo : {this.title}
        <paper-input
          always-float-label
          ref={el => (this.titleInput = el as HTMLInputElement)}
          label="Title"
          onKeyup={e => {
            this.setText('title', e.target.value);
          }}
        />
        <paper-input
          always-float-label
          ref={el => (this.textInput = el as HTMLInputElement)}
          label="Text"
          onKeyup={e => {
            this.setText('text', e.target.value);
          }}
        />
        <paper-button raised class="indigo" onClick={this.handleClick}>
          Save
        </paper-button>
      </div>
    );
  }
}
