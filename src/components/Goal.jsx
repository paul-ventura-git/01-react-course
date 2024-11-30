function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
        return <MissedGoal/>;
}

function MadeGoal() {
    return <h3>The value of props is TRUE!</h3>;
}

function MissedGoal() {
    return <h3>The value of props is FALSE!</h3>;
}

export default Goal