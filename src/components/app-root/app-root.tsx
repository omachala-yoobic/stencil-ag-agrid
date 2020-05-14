import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <stencil-route-link url="/grid-row-dragging">Grid Row Dragging</stencil-route-link>
          &nbsp; | &nbsp;
          <stencil-route-link url="/grid-range-selection">Grid Range Selection</stencil-route-link>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/grid-row-dragging' component='grid-row-dragging' />
              <stencil-route url='/grid-range-selection' component='grid-range-selection' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
