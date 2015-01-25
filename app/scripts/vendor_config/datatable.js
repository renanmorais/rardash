'use strict';

/**
 * Datatable config
 */

/* jshint unused: false */
var datatable = {};

datatable.generateTable = function(_element, _type, _urlTranslateTable, _data){

  jQuery(_element).dataTable({
    pageLength: 6,
    responsive: true,
    columnDefs: [
      { targets: [0], orderable: false }
    ]
  });

};
