function multipleSlick(){
    ('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
}

export default multipleSlick