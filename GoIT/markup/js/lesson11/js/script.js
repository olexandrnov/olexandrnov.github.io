// nameUser [] - массив для сохранения введеных пользователей;
//  checkNameUser - имя пользователя для проверки в массиве, что бы ввойти в систему;

var nameUser = [], checkNameUser, User;

while (nameUser.length <= 4)
{
  var name = prompt ('Введите имя пользователя', '');
  nameUser.push(name);
}

checkNameUser = prompt ('Введите имя пользователя для входа в систему...');

var j;
for (var i = 0; i < nameUser.length; i++) {
  debugger;
  if (checkNameUser === nameUser[i]) {
    j = 1;
    User = nameUser[i];
  } else {
    j = 0;
  }
}

if (j === 1) {
  alert('Добро пожаловать '+User);
} else {
  alert('Для '+checkNameUser+' вход запрещен');
}
