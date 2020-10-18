import { Component, h, Listen, State } from '@stencil/core';

//Read more on https://webcomponents.org
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() childTodo = new Array<Object>();

  @State() latestTodo: Object;

  @Listen('todoAdded')
  todoAddedHandler(event: CustomEvent<Object>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
    this.childTodo.push(event.detail);
    this.latestTodo = event.detail;
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <pre>
            {this.childTodo.map((p: any) => (
              <todo-child title={p.title} text={p.text} />
            ))}
          </pre>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/todo" component="app-todo" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
