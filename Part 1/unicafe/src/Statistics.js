import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad}) => {
    let all = good+neutral+bad;
    if (all === 0) {
        return (
            <p>No feedback given.</p>
        );
    }
    else {
        return ( 
            <>
                <table>
                    <tbody>
                        <tr><StatisticLine text="good" value={good}/></tr>
                        <tr><StatisticLine text="neutral" value={neutral}/></tr>
                        <tr><StatisticLine text="bad" value={bad}/></tr>
                        <tr><StatisticLine text="all" value={all}/></tr>
                        <tr><StatisticLine text="average" value={(good-bad)/all}/></tr>
                        <tr><StatisticLine text="positive" value={(good/all)*100 + '%'}/></tr>
                    </tbody>    
                </table>
            </>
        );
    }
    
}
 
export default Statistics;