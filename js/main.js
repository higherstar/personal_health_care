jQuery(document).ready(function( $ ) {
  // open welcome modal when load first page
  $(document).ready(function() {
    $('#welcome-modal').modal('show');
  });

  // handler for clicking on sidebar list
  $(document).on('click', '.submenu', function(e) {
    const subMenus = $('.submenu-list');
    for (let i = 0; i< subMenus.length; i++) {
      if (`#${subMenus[i].id}` !== e.target.hash) {
        subMenus[i].classList.remove('show');
      } else {
        subMenus[i].classList.add('show');
      }
    }
  });
});
