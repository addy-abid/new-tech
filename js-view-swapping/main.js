const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('tab')) {
    return;
  }
  for (let i = 0; i < $tabs.length; i++) {
    if (event.target.getAttribute('data-view') === $tabs[i].getAttribute('data-view')) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }
  const currentTab = event.target.getAttribute('data-view');
  for (let i = 0; i < $view.length; i++) {
    if (currentTab === $view[i].getAttribute('data-view')) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
});
