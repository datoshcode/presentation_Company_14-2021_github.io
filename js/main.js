$(function(){
  // -- Действие кнопки Меню для мобильной версии: открыть и показать перечень пунктов Меню
  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});