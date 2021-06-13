import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div style={{
                width: '110%',
                height: '110%',
                backgroundImage: `url('../../../Assets/field_truck.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            </div>
        )
    }
}

export default Home;