import { AllCommunityModules, Grid, GridOptions, simpleHttpRequest } from '@ag-grid-community/all-modules';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'grid-row-dragging',
  styleUrl: 'grid-row-dragging.scss',
  shadow: true
})
export class GridRowDragging {

  grid: Grid;
  container: HTMLDivElement;

  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'athlete', rowDrag: true },
      { field: 'country' },
      { field: 'year', width: 100 },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
    ],
    defaultColDef: {
      width: 170,
      sortable: true,
      filter: true,
    },
    rowDragManaged: true,
    animateRows: true,
  };

  componentDidLoad() {
    if (this.container) {
      this.grid = new Grid(this.container, this.gridOptions, { modules: [...AllModules, ...AllCommunityModules] });
      simpleHttpRequest({
        url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json',
      }).then((data) => this.gridOptions.api.setRowData(data));
    }
  }

  render() {
    return (
      <Host>
        <div class="grid" ref={(el) => this.container = el}>
        </div>
      </Host>
    );
  }
}
