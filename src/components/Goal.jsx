function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
        return <MissedGoal/>;
    }

    function MissedGoal() {
        return <h1>The value of props is TRUE!</h1>;
    }

    function MadeGoal() {
        return <h1>The value of props is FALSE!</h1>;
    }

export default Goal