### Comman components

The table core uses the following abstractions, commonly exposed by adapters:

- Column Defs
  Objects used to configure a column and its data model, display templates, and more
- Table
  The core table object containing both state and API
- Table Data
  The core data array you provide the table
- Columns
  Each column mirrors its respective column def and also provides column-specific APIs
- Rows
  Each row mirrors its respective row data and provides row-specific APIs
- Header Groups
  Header groups are computed slices of nested header levels, each containing a group of headers
- Headers
  Each header is either directly associated with or derived from its column def and provides header-specific APIs
- Cells
  Each cell mirrors its respective row-column intersection and provides cell-specific APIs
