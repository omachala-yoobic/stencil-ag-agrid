# StencilJS + Ag-Grid

This repo has been created to reproduce ag-grid issue within
*Grid Row Dragging* and *Grid Range Selection* features.

When above-mentioned options are used inside the native Web Components (in our case provided by StencilJS library)
means inside the ShadowDOM then the features do not work.

## Steps to reproduce

- Clone the repository
- Install dependencies `npm install`
- Start Stencil `npm start`
- Open browser: http://localhost:3333/