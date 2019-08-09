jQuery(document).ready(function( $ ) {
  // open welcome modal when load first page
  $(document).ready(function() {
    $('#welcome-modal').modal('show');
  });

  // handler for clicking on side bar submenu list
  $(document).on('click', '.side-bar-submenu-title', function(e) {
    for (let i = 0; i< $('.side-bar-submenu-title').length; i++) {
      if($('.side-bar-submenu-title')[i] !== e.target) {
        $('.side-bar-submenu-title')[i].classList.remove('active');
        $('.side-bar-submenu')[i].classList.remove('active');
      } else {
        $('.side-bar-submenu')[i].classList.add('active');
      }
    }

    e.target.classList.add('active');
  });

  // handler for clicking on dropdown
  $( ".custom-dropdown" ).blur(function() {
    $(this).find('img').attr('src', '../img/toggle_left.png');
  });

  $('.custom-dropdown').click(function() {
    const dropDowns = $('.custom-dropdown');

    for (let i = 0; i< dropDowns.length; i++) {
      if ($(dropDowns[i])[0].id !== $(this)[0].id) {
        $(dropDowns[i]).find('img').attr('src', '../img/toggle_left.png');
      }
    }

    if ($(this).find('img').attr('src') === '../img/toggle_left.png')
      $(this).find('img').attr('src', '../img/toggle_down.png');
    else
      $(this).find('img').attr('src', '../img/toggle_left.png');
  });
});
