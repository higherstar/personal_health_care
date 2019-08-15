jQuery(document).ready(function( $ ) {
  // open welcome modal when load first page
  $(document).ready(function() {
    $('#welcome-modal').modal('show');
  });

  // handler for clicking on side bar submenu list
  $(document).on('click', '.side-bar-submenu-title', function(e) {
    if ($('.details-container').length > 0)
      for (let i = 0; i< $('.details-container').length; i++) {
        $('.details-container')[i].classList.replace('show', 'hide');
      }
    for (let i = 0; i< $('.side-bar-submenu-title').length; i++) {
      if($('.side-bar-submenu-title')[i] !== e.target) {
        $('.side-bar-submenu-title')[i].classList.remove('active');
        $('.side-bar-submenu')[i].classList.remove('active');
      } else {
        $('.side-bar-submenu')[i].classList.add('active');
        if ($('.details-container').length > 0) {
          $(e.target.hash)[0].classList.replace('hide', 'show');
          $(e.target.hash)[0].classList.replace('hide', 'show');
        }
        const expandButtonId = $('.side-bar-submenu-title')[i].hash.slice(0, $('.side-bar-submenu-title')[i].hash.length-8)+ '-btn';
        if (!$('.side-bar-submenu-title')[i].classList.contains('active') && $(expandButtonId))
          $(expandButtonId).trigger('click');
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
      const submenuHash = '#' + $(this)[0].id.slice(0, $(this)[0].id.length - 3) + 'details';
      for (let i = 0; i< $('.side-bar-submenu-title').length; i++) {
        if($('.side-bar-submenu-title')[i].hash === submenuHash) {
          console.log($('.side-bar-submenu-title')[i]);
          $('.side-bar-submenu-title')[i].click();
        }
      }
      $(titleId)[0].style.display = 'block';
    } else {
      $(this).find('.custom-expand-btn-plus')[0].style.display = 'block';
      $(this).find('.custom-expand-btn-minus')[0].style.display = 'none';
      titleId = '#' + $(this)[0].id + '-title';
      $(titleId)[0].style.display = 'none';
    }
  });

  // handler for clicking on prev next button of diagnosis details
  $('.diagnostics-details-btn-prev').click(function() {
    let titleClass = '.' + $(this)[0].id.slice(0, $(this)[0].id.length-4) + 'title';
    let contentClass = '.' + $(this)[0].id.slice(0, $(this)[0].id.length-4) + 'content';
    const detailTitles = $(titleClass);
    const detailContents = $(contentClass);
    for (let i = 0; i< detailTitles.length; i++) {
      if ($(detailTitles[i])[0].classList.contains('show')) {
        if (i !== 0) {
          $(detailTitles[i])[0].classList.replace('show', 'hide');
          $(detailContents[i])[0].classList.replace('show', 'hide');
          $(detailContents[(i - 1)])[0].classList.replace('hide', 'show');
          $(detailTitles[(i - 1)])[0].classList.replace('hide', 'show');
        }
        break;
      }
    }
  });

  $('.diagnostics-details-btn-next').click(function() {
    let titleClass = '.' + $(this)[0].id.slice(0, $(this)[0].id.length-4) + 'title';
    let contentClass = '.' + $(this)[0].id.slice(0, $(this)[0].id.length-4) + 'content';
    const detailTitles = $(titleClass);
    const detailContents = $(contentClass);
    for (let i = 0; i< detailTitles.length; i++) {
      if ($(detailTitles[i])[0].classList.contains('show')) {
        if (i !== detailTitles.length - 1) {
          $(detailTitles[i])[0].classList.replace('show', 'hide');
          $(detailContents[i])[0].classList.replace('show', 'hide');
          $(detailContents[(i + 1)])[0].classList.replace('hide', 'show');
          $(detailTitles[(i + 1)])[0].classList.replace('hide', 'show');
        }
        break;
      }
    }
  });
});
