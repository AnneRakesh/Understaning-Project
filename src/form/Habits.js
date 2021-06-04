import React, { Component } from 'react'

 class Habits extends Component {

    

    render() {
        const { smoking,
                alcohol,
                inputChangeHandler,
                 } = this.props;
        return (
            <div>
                    <input type="checkbox" name="smoking" value={smoking} onChange={(e)=>inputChangeHandler(e,"habits")} placeholder="Alcohol"/><br/>
                    <input type="checkbox" name="alcohol" value={alcohol} onChange={(e)=>inputChangeHandler(e,"habits")} /><br/>
                    {/* <input type="submit" name="smoking" /> <br/> */}
                    
            </div>
        )
    }
}

export default Habits;
