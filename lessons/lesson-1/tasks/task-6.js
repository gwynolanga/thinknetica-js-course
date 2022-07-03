// Условие задачи такое же из task-5.js, но теперь нужно переписать условные операторы if с помощью тернарного оператора:

function checkAccess(user) {
  return (user['isAdmin'] && (user['age'] >= 18 && user['age'] <= 35)) ? true :
    ((user['age'] >= 18 && user['age'] <= 35) && (user['paid']) && (!user['blocked']) && (!user['badUsername'])) ? true : false
}
