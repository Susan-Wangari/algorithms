function bouncer(arr) {
  let newArr = Boolean(false);
  if(false || null || 0 || undefined || NaN) {
    return Boolean;
  } else {
    return arr.filter(Boolean);
  }
}

bouncer([7, "ate", "", false, 9]);
