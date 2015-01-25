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
    ],
    'fnDrawCallback': function() {
      /**
       * Remove all check in datatable
       */
      var getElementsRemove = document.querySelectorAll('.elementCheck');
      var countElementsRemove = getElementsRemove.length;

      while(countElementsRemove--){
        getElementsRemove[countElementsRemove].checked = false;
      }
      var getActionsRemove = document.querySelector('.action-table');
      getActionsRemove.style.display = 'none';

      var getElementAction = document.getElementById('allCheck');
      getElementAction.checked = false;
    }
  });

};
