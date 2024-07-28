//1. 생성(mount)
//- componentDidMount
useEffect(() => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);

//2. 업데이트(update)
//- componentDidUpdate
//두 번째 인자에 props 또는 state 할당
useEffect(() => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => setData(data));
}, [props, state]);

//3. 제거(unmount)
//- componentWillUnmount
//return에 clean up 작업 할당
useEffect(() => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => setData(data));

  return () => {
    //clean up!
  };
}, [props, state]);
