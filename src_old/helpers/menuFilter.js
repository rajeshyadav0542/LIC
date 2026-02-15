// helpers/menuFilter.js
function filterMenu(menu, permissions) {
    // console.log("menu====",menu,"permissions====",permissions);
    return menu
      .filter(item => !item.permissions.length || item.permissions.some(p => permissions.includes(p)))
      .map(item => ({
        ...item,
        children: item.children ? filterMenu(item.children, permissions) : null,
      }));
  }
  function userFilter(menu, permissions) {
    return menu
      .filter(item => !item.permissions.length || item.permissions.some(p => permissions.includes(p)))
      .map(item => ({
        ...item,
        children: item.children ? userFilter(item.children, permissions) : null,
      }));
  
}
module.exports =  { filterMenu, userFilter };
  