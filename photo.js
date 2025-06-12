function loadImage() {
  
    $.ajax({
    url: 'https://picsum.photos/600/400',
    method: 'GET',

    xhrFields: {
      responseType: 'blob'  
    },

    success: function (data) {
      const imgURL = URL.createObjectURL(data);
      const img = $('<img>', {
        src: imgURL,
        alt: 'Random Image',
        class: 'img-fluid'
      });

      $('#output').empty().append(img);
    },

    error: function () {
      $('#output').text('Failed to load image.');
    }

  });
}
