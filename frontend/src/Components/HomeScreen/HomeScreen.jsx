import './HomeScreen.css'
import Sidebar from '../Sidebar/Sidebar'

const HomeScreen = () => {

    return(
        <div> 
            <Sidebar/>
            <div className="accounts">
                {/* Main content goes here */}
            </div>
        </div>
    )
}

export default HomeScreen