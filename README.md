# Тестовое задание
## Быстрые ссылки
  - итоговый результат https://8xr0v.csb.app  
  - код приложения https://codesandbox.io/s/practical-cdn-8xr0v

## Задача
Реализовать web-приложение, содержащее страницу с таблицей, реализованную с помощью 
https://www.npmjs.com/package/react-table

Название колонок взять из примера: https://codesandbox.io/s/react-table-simple-table-1ts13 , вместо "makeData" требуется
реализовывать сетевое взаимодействие (только GET), данные взять от сюда: https://5dc0838095f4b90014ddc7c3.mockapi.io/table

Ячейки колонк таблицы "First Name", "Last Name" и "Visits" должны быть редактируемыми:
  - по двойному клику на ячейку активируется режим редактирования и появляется курсор;
  - по нажатию на Enter или потере фокуса изменения должны сохраниться (только в оперативной памяти, 
  сетевой запрос реализововать не обязательно), режим редактирования деактивируется;
  - по нажатию на ESC режим редактирования деактивируется, изменения отменяются.
  
Для ячейки "Visits" реализовать валидацию вводимых значений, допустимый ввод целые неотрицательные числа.
  
