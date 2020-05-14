import { AllCommunityModules, Grid, GridOptions, simpleHttpRequest } from '@ag-grid-community/all-modules';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'grid-range-selection',
  styleUrl: 'grid-range-selection.scss',
  shadow: true
})
export class GridRangeSelection {

  grid: Grid;
  container: HTMLDivElement;

  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'athlete', minWidth: 150 },
      { field: 'age', maxWidth: 90 },
      { field: 'country', minWidth: 150 },
      { field: 'year', maxWidth: 90 },
      { field: 'date', minWidth: 150 },
      { field: 'sport', minWidth: 150 },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 100,
    },
    enableRangeSelection: true,
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
