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
    'bLengthChange': false,
    'fnDrawCallback': function() {
      /**
       * Remove all check in datatable
       */
      var disableButtonDeleteElements = document.getElementById('deleteSelectedUsers');
      disableButtonDeleteElements.disabled = true;
      disableButtonDeleteElements.classList.remove('bt-rardash-danger');

      var getElementsRemove = document.querySelectorAll('.elementCheck');
      var countElementsRemove = getElementsRemove.length;

      while(countElementsRemove--){
        getElementsRemove[countElementsRemove].checked = false;
        /* global checkElements */
        getElementsRemove[countElementsRemove].addEventListener('change', checkElements.checkOneOrMore);
      }

      var getElementAction = document.getElementById('allCheck');
      getElementAction.checked = false;
    }
  });

};
