function countdown(start) {
  return function log(n) {
    if (n < 0) {
      console.log('Done!');
      return;
    }

    console.log(n);
    log(n - 1);
  }(start);
}

countdown(7);

