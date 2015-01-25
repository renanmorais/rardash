'use strict';

(function(){
  /**
   * Check all elements
   */
  /*global checkElements*/
  var getElementAction = document.getElementById('allCheck');
  getElementAction.addEventListener('change', checkElements.checkAll);

  /**
   * Generate table students
   */
  /*global datatable*/
  var getElementToGerateTable = document.getElementById('tableDefault');
  datatable.generateTable(getElementToGerateTable);
}());

