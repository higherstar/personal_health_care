jQuery(document).ready(function( $ ) {
  // open welcome modal when load first page
  $(document).ready(function() {
    $('#welcome-modal').modal('show');
  });

  // handler for clicking on sidebar list
  $(document).on('click', '.side-bar-menu-title', function(e) {
    const selectedMenuTitle = e.target;
    const subMenuLists = $('.submenu-list');
    const menuTitles = $('.side-bar-menu-title');
    const menus = $('.side-bar-menu');

    selectedMenuTitle.classList.contains('active') ? selectedMenuTitle.classList.remove('active')
      : selectedMenuTitle.classList.add('active');

    for (let i = 0; i< subMenuLists.length; i++) {
      if(menuTitles[i] !== selectedMenuTitle) {
        menuTitles[i].classList.remove('active');
      }
      menus[i].classList.remove('active');
      subMenuLists[i].classList.remove('active');
      if (`#${subMenuLists[i].id}` === e.target.hash) {
        menus[i].classList.add('active');
        subMenuLists[i].classList.add('active');
      }
    }
  });

  // handler for clicking on dropdown
  $('.custom-dropdown').click(function() {
    const dropDowns = $('.custom-dropdown');

    for (let i = 0; i< dropDowns.length; i++) {
      $(dropDowns[i]).find('img').attr('src', '../img/toggle_left.png');
    }

    if ($(this).find('img').attr('src') === '../img/toggle_left.png')
      $(this).find('img').attr('src', '../img/toggle_down.png');
    else
      $(this).find('img').attr('src', '../img/toggle_left.png');
  });
});
