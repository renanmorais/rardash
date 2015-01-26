'use strict';

(function(){
  /**
   * Check all elements
   */
  /*global checkElements*/
  var getElementAction = document.getElementById('allCheck');
  if(getElementAction){
    getElementAction.addEventListener('change', checkElements.checkAll);
  }

  /**
   * Generate table Users
   */
  /*global datatable*/
  var getElementToGerateTable = document.getElementById('tableDefault');
  datatable.generateTable(getElementToGerateTable);

  /**
   * Check if input file is empty
   */
  var inputFile = document.getElementById('inputFile');

  inputFile.addEventListener('change', function(e){
    /* global showAlert */
    if(e.target.files[0].type !== 'application/javascript'){
      showAlert.simple();
      e.target.value = '';
      var getButtonDisabledType = document.getElementById('buttonUpload');
      getButtonDisabledType.disabled = true;
      getButtonDisabledType.classList.remove('bt-rardash-action');
    }else{
      if(e.target.files.length){
        var getButtonDisabled = document.getElementById('buttonUpload');
        getButtonDisabled.disabled = false;
        getButtonDisabled.classList.add('bt-rardash-action');
      }
    }
  }, false);
}());

