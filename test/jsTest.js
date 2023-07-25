function deepCopy(goal) {
  if (typeof goal == "object") {
    if (goal == null) return null;
    let keys = Object.keys(goal);
    const result =
      Object.prototype.toString.call(goal) == "[object Array]" ? [] : {};
    keys.forEach((key) => {
      result[key] = deepCopy(goal[key]);
    });
    return result;
  } else {
    return goal;
  }
}