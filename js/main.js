jQuery(document).ready(function( $ ) {
  //handler for welcome modal
  $( window ).on( "load", function() {
    if(localStorage.getItem('firstVisit') === null) {
      $('#welcome-modal').modal('show');
      localStorage.setItem('firstVisit', 'true');
      $('#welcome-modal-submenu')[0].classList.add('active');
    }
  });

  $('#welcome-modal-link').click(function () {
    $('#welcome-modal').modal('show');
    $('#welcome-modal-submenu')[0].classList.add('active');
  });

  $('#welcome-modal').on('hidden.bs.modal', function () {
    $('#welcome-modal-submenu')[0].classList.remove('active');
  });

  // handler for clicking on dropdown
  $( ".custom-dropdown" ).blur(function() {
    $(this).find('img').attr('src', '../../img/toggle_left.png');
  });

  $('.custom-dropdown').click(function() {
    const dropDowns = $('.custom-dropdown');
    $(this)[0].style.zIndex = '6';
    for (let i = 0; i< dropDowns.length; i++) {
      if ($(dropDowns[i])[0].id !== $(this)[0].id) {
        $(dropDowns[i])[0].style.zIndex = '1';
        $(dropDowns[i]).find('img').attr('src', '../../img/toggle_left.png');
      }
    }
    if ($(this).find('img').attr('src') === '../../img/toggle_left.png')
      $(this).find('img').attr('src', '../../img/toggle_down.png');
    else
      $(this).find('img').attr('src', '../../img/toggle_left.png');
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
    showSideBar();
  });

  //handler for hide side bar
  $('.right-space').click(function () {
    hideSideBar();
  });

  $('.side-bar-menu-title').click(function () {
    if($(window).width() <= 750) {
      hideSideBar();
    }
  });

  $('.side-bar-submenu-title').click(function () {
    if($(window).width() <= 750) {
      hideSideBar();
    }
  });

  //handler for search modal
  $('#search-input').change(function () {
    $('#search-text').text($('#search-input')[0].value);
    search($('#search-input')[0].value);
  });

  //handler for sidebar search
  $('#mobile-search').click(function () {
    showSideBarSearch();
  });

  //handler for World Map modal
  $('#roche-world-map-modal').on('shown.bs.modal', function () {
    $('#roche-world-data').modal('show');
  });

  function hideSideBar() {
    $('.mobile-side-bar')[0].style.left = '-68%';
    $('.mobile-header')[0].style.left = '0';
    $('.main-content')[0].style.marginLeft = '0';
    $('.right-space')[0].style.zIndex = '-1';
    hideSideBarSearch();
  }

  function showSideBar() {
    $('.mobile-side-bar')[0].style.left = '0';
    $('.mobile-header')[0].style.left = '68%';
    $('.main-content')[0].style.marginLeft = '68%';
    $('.right-space')[0].style.zIndex = '7';
  }

  function showSideBarSearch() {
    $('#mobile-search')[0].classList.add('mobile-side-bar-search');
    $('#mobile-search').find('span')[0].style.display = 'none';
    $('#mobile-search').find('input')[0].style.display = 'block';
    $('.mobile-search-result')[0].style.display = 'block';
    $('.mobile-search-result')[0].style.right = '-40px';
    $('.mobile-header')[0].style.left = 'calc(68% + 40px)';
    $('.main-content')[0].style.marginLeft = 'calc(68% + 40px)';
  }

  function hideSideBarSearch() {
    $('#mobile-search')[0].classList.remove('mobile-side-bar-search');
    $('#mobile-search').find('span')[0].style.display = 'block';
    $('#mobile-search').find('input')[0].style.display = 'none';
    $('.mobile-search-result')[0].style.display = 'none';
    $('.mobile-search-result')[0].style.right = '0';
  }

  function search(keyword) {
    let resultContent = '';
    data.forEach(d => {
      let keyDescription_before;
      let keyDescription_after;
      let result, keyIndexList = [];
      let regex = new RegExp(keyword,'gi');
      while ( (result = regex.exec(d.content)) ) {
        keyIndexList.push(result.index);
      }
      keyIndexList.forEach(keyIndex => {
        if(keyIndex >= 70) {
          keyDescription_before = d.content.slice(keyIndex - 70, keyIndex);
          keyDescription_after = d.content.slice(keyIndex + keyword.length, keyIndex + keyword.length + 80);
        }
        else {
          keyDescription_before = d.content.slice(0, keyIndex);
          keyDescription_after = d.content.slice(keyIndex + keyword.length, keyIndex + keyword.length + 100);
        }
        resultContent += '<div class="modal-search-result-item">' + keyDescription_before +
          '<a href=' + d.url + '>' + keyword + '</a>' + keyDescription_after + '   ' + '<span class="search-result-page">'
          + d.page +'</span>' + '</div>';
      });
    });
    if(resultContent !== '')
      $('#search-result').html(resultContent);
    else
      $('#search-result').html('<span>No Result</span>');
  }
});
