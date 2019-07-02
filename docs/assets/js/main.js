import { Tabs } from 'govuk-frontend'

var $main = document.querySelector('main.content');
var $tabs = document.querySelector('[data-module="tabs"]')

if ($tabs) {
  $main.classList.add('js-enabled');
  new Tabs($tabs).init()
  console.log('myhello')
}