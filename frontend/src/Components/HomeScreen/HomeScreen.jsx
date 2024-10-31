import './HomeScreen.css'

const HomeScreen = () => {

    return(
        <div> 
            <div className="sidebar"> 
                <div className="logo">Hint</div>   
                <div className="menu-container">
                    <a href="#overview" className="menu-item">Overview</a>
                    <a href="#transactions" className="menu-item"> Transactions </a>
                    <a href="#creditscore" className="menu-item"> Credit Score </a>
                    <a href="#Bills" className="menu-item"> Bills </a>
                    <a href="#Budgets" className="menu-item"> Budgets </a>
                    <a href="#Goals" className="menu-item"> Goals </a>
                    <a href="#Bills" className="menu-item"> Bills </a>
                    <a href="#Trends" className="menu-item"> Trends </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <a href="#Settings" className="menu-item"> Settings </a>
                    <br/>
                    <a href="/LoginSignup" className="menu-item"> Logout </a>
                </div>

                <div className='accounts'> 

                </div>
            </div>
        </div>
    )
}

export default HomeScreen