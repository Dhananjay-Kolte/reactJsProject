export const sortByUserAction = (
  firstIn: INotification,
  secondIn: INotification,
) => {
  if (firstIn.action === false && secondIn.action === false) return 0;
  if (secondIn.action === false) return -1;
  if (firstIn.action === false) return 1;

  return Number(firstIn) - Number(secondIn);
};

export const requiedUserActionArray = (value: INotification) =>
  value.action === true;

export const renderNotificationsTest = (
  sortedByActionsArray: INotification[],
) => {
  const requires: INotification[] = [];
  const unrequires: INotification[] = [];

  if (sortedByActionsArray.filter(requiedUserActionArray).length)
    for (let index = 0; index < sortedByActionsArray.length; index++) {
      if (sortedByActionsArray[index].action === true) {
        requires.push(sortedByActionsArray[index]);
        if (requires.length >= 6) break;
      } else if (requires.length >= 6) break;
      else if (requires.length + unrequires.length < 6)
        unrequires.push(sortedByActionsArray[index]);
    }
  else
    for (let index = 0; index < sortedByActionsArray.length; index++)
      if (index >= 6) break;
      else unrequires.push(sortedByActionsArray[index]);

  return {
    requires,
    unrequires,
  };
};
