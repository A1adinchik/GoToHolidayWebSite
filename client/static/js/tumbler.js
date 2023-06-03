$(document).ready(function() {
    $('.btn-group .btn').click(function() {
      const category = $(this).data('category');
      if (category === 'all') {
        $('#catalog-items .col-md-4').show();
      } else {
        $('#catalog-items .col-md-4').hide();
        $(`#catalog-items .col-md-4[data-category="${category}"]`).show();
      }
      $('.btn-group .btn').removeClass('active');
      $(this).addClass('active');
    });
  });  