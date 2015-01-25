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

    var enableButtonDeleteElements = document.getElementById('deleteSelectedUsers');
    enableButtonDeleteElements.disabled = false;
    enableButtonDeleteElements.classList.add('bt-rardash-danger');

    while(countElements--){
      getElements[countElements].checked = true;
    }
  }else{
    var getElementsRemove = document.querySelectorAll('.elementCheck');
    var countElementsRemove = getElementsRemove.length;

    var disableButtonDeleteElements = document.getElementById('deleteSelectedUsers');
    disableButtonDeleteElements.disabled = true;
    disableButtonDeleteElements.classList.remove('bt-rardash-danger');

    while(countElementsRemove--){
      getElementsRemove[countElementsRemove].checked = false;
    }
  }

};

checkElements.checkOneOrMore = function(){
  var getElements = document.querySelectorAll('.elementCheck');
  var countElements = getElements.length;

  while(countElements--){
    if(getElements[countElements].checked){
      var enableButtonDeleteElements = document.getElementById('deleteSelectedUsers');
      enableButtonDeleteElements.disabled = false;
      enableButtonDeleteElements.classList.add('bt-rardash-danger');
      return false;
    }else{
      var disableButtonDeleteElements = document.getElementById('deleteSelectedUsers');
      if(!countElements){
        disableButtonDeleteElements.disabled = true;
        disableButtonDeleteElements.classList.remove('bt-rardash-danger');
      }
    }
  }
};
