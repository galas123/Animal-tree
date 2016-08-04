'use strict'
var ul = document.body.children[0];
var collectionLi = ul.getElementsByTagName('li');

for (var i = 0; i < collectionLi.length; i++) {
  let item = collectionLi[i];
  let subItems = item.getElementsByTagName('li');
  let itemName=item.childNodes[0].textContent.trim();

  console.log(itemName, subItems.length);
}
