'use strict';

/**
* Function to select all in table
*/
/*jshint unused:false*/
var checkElements = {};
checkElements.checkAll = function (event){
  if(event.target.checked){
    var getElements = document.querySelectorAll('.elementCheck');
    var countElements = getElements.length;

    while(countElements--){
      getElements[countElements].checked = true;
    }

    var getActionsShow = document.querySelector('.action-table');
    getActionsShow.style.display = 'inherit';
  }else{
    var getElementsRemove = document.querySelectorAll('.elementCheck');
    var countElementsRemove = getElementsRemove.length;

    while(countElementsRemove--){
      getElementsRemove[countElementsRemove].checked = false;
    }
    var getActionsRemove = document.querySelector('.action-table');
    getActionsRemove.style.display = 'none';
  }

};


