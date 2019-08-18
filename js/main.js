jQuery(document).ready(function( $ ) {
  // open welcome modal when load first page
  $(document).ready(function() {
    $('#welcome-modal').modal('show');
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
    for (let i = 0; i< dropDowns.length; i++) {
      if ($(dropDowns[i])[0].id !== $(this)[0].id) {
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
