jQuery(document).ready(function( $ ) {
  // open welcome modal when load first page
  $(document).ready(function() {
    if(localStorage.getItem('welcome') === null) {
      $('#welcome-modal').modal('show');
      localStorage.setItem('welcome', 'true');
    } else {
      if($('#welcome-modal-submenu').length > 0) {
        $('#welcome-modal-submenu')[0].classList.remove('active');
      }
    }
  });

  //handler for welcome modal
  $('#welcome-modal-link').click(function () {
    $('#welcome-modal').modal('show');
    $('#welcome-modal-submenu')[0].classList.add('active');
  });

  $('#welcome-modal').on('hidden.bs.modal', function () {
    $('#welcome-modal-submenu')[0].classList.remove('active');
  });

  // handler for clicking on dropdown
  $( ".custom-dropdown" ).blur(function() {
    if($(this)[0].classList.contains('zoom-out'))
      $(this).find('img').attr('src', '../../img/toggle_left.png');
    else
      $(this).find('img').attr('src', '../img/toggle_left.png');
  });

  $('.custom-dropdown').click(function() {
    const dropDowns = $('.custom-dropdown');
    $(this)[0].style.zIndex = '6';
    for (let i = 0; i< dropDowns.length; i++) {
      if ($(dropDowns[i])[0].id !== $(this)[0].id) {
        $(dropDowns[i])[0].style.zIndex = '1';
        if($(this)[0].classList.contains('zoom-out'))
          $(dropDowns[i]).find('img').attr('src', '../../img/toggle_left.png');
        else
        $(dropDowns[i]).find('img').attr('src', '../img/toggle_left.png');
      }
    }
    if($(this)[0].classList.contains('zoom-out'))
      if ($(this).find('img').attr('src') === '../../img/toggle_left.png')
        $(this).find('img').attr('src', '../../img/toggle_down.png');
      else
        $(this).find('img').attr('src', '../../img/toggle_left.png');
    else
      if ($(this).find('img').attr('src') === '../img/toggle_left.png')
        $(this).find('img').attr('src', '../img/toggle_down.png');
      else
        $(this).find('img').attr('src', '../img/toggle_left.png');
  });

  // handler for clicking on expand button
  $('.custom-expand-btn').click(function() {
    const hrefLink = $(this)[0].id.slice(0, $(this)[0].id.length-4) + '.html';
    location.href = hrefLink;
  });

  // handler for clicking on prev next button of diagnosis details
  $('.details-prev-next').click(function() {
    let activeSubmenuList;
    let activeSubmenu;
    let activeSubmenuIndex;

    const submenuLists = $('.submenu-list');
    for (let i = 0; i< submenuLists.length; i++) {
      if(submenuLists[i].classList.contains('active')) {
        activeSubmenuList = submenuLists[i];
      }
    }

    const activeSubmenus = $(activeSubmenuList).find('a');
    for (let i = 0; i< activeSubmenus.length; i++) {
      if(activeSubmenus[i].classList.contains('active')) {
        activeSubmenu = activeSubmenus[i];
        activeSubmenuIndex = i;
      }
    }

    if (this.classList.contains('details-btn-prev') && activeSubmenuIndex !== 0) {
      activeSubmenus[activeSubmenuIndex - 1].click();
    } else if (this.classList.contains('details-btn-next') && activeSubmenuIndex !== activeSubmenus.length - 1) {
      activeSubmenus[activeSubmenuIndex + 1].click();
    }
  });

  //handler for mobile menu button
  $('.menu-button').click(function() {
    if ($('.side-bar')[0].classList.contains('mobile-side-bar')) {
      $('.side-bar')[0].classList.remove('mobile-side-bar');
      $('#header')[0].classList.remove('mobile-header');
      $('.main-content')[0].style.marginLeft = '0';
    } else {
      $('.side-bar')[0].classList.add('mobile-side-bar');
      $('#header')[0].classList.add('mobile-header');
      $('.main-content')[0].style.marginLeft = '73%';
    }
  });

  //handler for search modal
  $('#search-input').change(function () {
    $('#search-text').text($('#search-input')[0].value);
  });
});
