import './HomeScreen.css';
import Sidebar from '../Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import { currencyFormatter } from "../../utils"
import { useState } from 'react';
import AddIncomeModal from './InputIncomeModal';


const HomeScreen = ({ income }) => {
    const [showAddIncomeModal, setShowAddIncomeModal] = useState(false)

    function openAddIncomeModal(data){
        setShowAddIncomeModal(true)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', margin: 0, padding: '0', height: '100vh' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', 
            }}>
                {/* Top Section */}
                <Container style={{background: 'lightgrey', height: '90vh', width: '80vw'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', }}>
                    <Container
                        style={{
                            flex: 1,
                            backgroundColor: '#1E88E5',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '50vw'
                        }}
                    >
                        <span>{currencyFormatter.format(income)}</span>
                        <span>Total Earning</span>
                    </Container>

                    <Container
                        style={{
                            flex: 1,
                            backgroundColor: '#66BB6A',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h4>$900.00</h4>
                        <span>Total Order</span>
                    </Container>

                    <Container
                        style={{
                            flex: 1,
                            backgroundColor: '#43A047',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h4>$203k</h4>
                        <span>Total Income</span>
                    </Container>
                </div>

                {/* Bottom Section */}
                <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
                    {/* Large Left Container */}
                    <Container
                        style={{
                            flex: 2,
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                        }}
                    >
                        {/* Add your main content here */}
                    </Container>

                    {/* Right Side Section */}
                    <Container
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                        }}
                    >
                        <Button style={{
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center'
                            }}
                            onClick={() => setShowAddIncomeModal(true)}>&times;</Button>
                        <div> Input your income </div>
                    </Container>
                </div>
                </Container>
                <AddIncomeModal 
                    show={showAddIncomeModal}
                    handleClose={() => setShowAddIncomeModal(false)}
                />
            </div>
        </div>
    );
};

export default HomeScreen;
