import React from 'react';

class ViewBuilding extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const building = this.props.building;
        return Object.entries(building)
            .map(([key, value]) => {
                return (
                    <div>
                        <p>
                            <div> ID : {value.id}</div>
                            <div> Code : {value.code}</div>
                            <div> Name : {value.name}</div>
                            <div> Address : {value.address}</div>
                            <div> Coordinates : {JSON.stringify(value.coordinates)}</div>

                        </p>
                    </div>

                );
            });
    }
}

export default ViewBuilding;
