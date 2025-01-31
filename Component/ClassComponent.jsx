class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("컴포넌트가 마운트되었습니다.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("컴포넌트가 업데이트되었습니다.");
    if (prevState.count !== this.state.count) {
      console.log("count 값이 변경되었습니다.");
    }
  }

  componentWillUnmount() {
    console.log("컴포넌트가 언마운트되었습니다.");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>증가</button>
      </div>
    );
  }
}

export default ClassComponent;
