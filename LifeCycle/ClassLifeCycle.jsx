//1. 생성(mount)
//- constructor
class MyComponent extends React.component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}
//- static getDerivedStateFromProps
static getDerivedStateFromProps(next, prev){
    if(next.value!==prev.value){
        return {value:next.value};
    }
    return null;
}

//- render
render(){
    return <div>{this.state.couunt}</div>;
}

//- componentDidMount
componentDidMount(){
    fetch('/api/data')
    .then(response =>response.json())
    .then(data=>this.ContentVisibilityAutoStateChangeEvent({data}));
}

//2. 업데이트(update)
//- shouldComponentUpdate
shouldComponentUpdate(nextProps,nextState){
    return nextProps.value!==this.props.value;
}

//- getSnapshotBeforeUpdate
getSnapshotBeforeUpdate(prevProps, prevState) {
    return { scrollTop: document.documentElement.scrollTop };
}

//3. 제거(unmount)
//- componentWillUnmount
componentWillUnmount(){
    clearTimeout(this.timeout);
}