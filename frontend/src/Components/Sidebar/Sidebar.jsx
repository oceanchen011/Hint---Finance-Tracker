import './Sidebar.css'

const Sidebar = () => {

    return(
        <div> 
            <div className="sidebar"> 
                <div className="logo">Hint</div>   
                <div className="menu-container">
                    <a href="/HomeScreen" className="menu-item">Overview</a>
                    <a href="#transactions" className="menu-item"> Transactions </a>
                    <a href="#creditscore" className="menu-item"> Credit Score </a>
                    <a href="#Bills" className="menu-item"> Bills </a>
                    <a href="/Budget" className="menu-item"> Budgets </a>
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
                    <a href="/" className="menu-item"> Logout </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar