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

  // handler for clicking on expand button
  $('.custom-expand-btn').click(function() {
    const expandBtns = $('.custom-expand-btn');
    let titleId = '';
    for (let i = 0; i< expandBtns.length; i++) {
      if ($(expandBtns[i])[0].id !== $(this)[0].id) {
        console.log($(expandBtns[i])[0].id !== $(this)[0].id);
        $(expandBtns[i]).find('.custom-expand-btn-plus')[0].style.display = 'block';
        $(expandBtns[i]).find('.custom-expand-btn-minus')[0].style.display = 'none';
        titleId = '#' + $(expandBtns[i])[0].id + '-title';
        $(titleId)[0].style.display = 'none';
      }
    }

    if ($(this).find('.custom-expand-btn-plus')[0].style.display === 'block') {
      $(this).find('.custom-expand-btn-plus')[0].style.display = 'none';
      $(this).find('.custom-expand-btn-minus')[0].style.display = 'block';
      titleId = '#' + $(this)[0].id + '-title';
      $(titleId)[0].style.display = 'block';
    } else {
      $(this).find('.custom-expand-btn-plus')[0].style.display = 'block';
      $(this).find('.custom-expand-btn-minus')[0].style.display = 'none';
      titleId = '#' + $(this)[0].id + '-title';
      $(titleId)[0].style.display = 'none';
    }
  });
});
