import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import Add from './components/Add';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            selectedBuilding: 0,
            newBuilding: '',
            building: '',
            data: this.props.data
        };
    }

    filterUpdate(value) {
        this.setState({filterText: value}, () => {
            console.log(this.state.filterText);
            console.log("Filtered text : " + this.state.filterText);

        });
    }

    addBuilding(building) {
        this.props.data.push(building);
        this.selectedUpdate(building.id);
    }

    selectedUpdate(id) {
        this.setState({selectedBuilding: id}, () => {
            console.log("Clicked on item with ID : " + this.state.selectedBuilding);

            const viewBuilding = this.props.data.filter(e => e.id === id);
            this.setState({building: viewBuilding}, () => {
                console.log("Selected building: " + this.state.building);
            });

        });
    }

    delete(id) {

        var removeIndex = this.props.data.map(building => building.id)
            .indexOf(id);

        console.log(removeIndex);
        let newData = this.props.data.splice(removeIndex, 1);

        this.setState({data: newData}, () => {
        });

        this.selectedUpdate(-1);

    }

    render() {
        return (
            <div className="bg">
                <div className="row">
                    <h1>UF Directory App</h1>
                    <Add
                        addBuilding={this.addBuilding.bind(this)}
                    />
                </div>

                <Search
                    filterText={this.state.filterText}
                    data={this.props.data}
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <main>
                    <div className="row">
                        <div className="column1">
                            <div className="tableWrapper">
                                <table className="table table-striped table-hover">
                                    <tr>
                                        <td>
                                            <b>Code Building (Click in the name for details)</b>
                                        </td>
                                    </tr>
                                    <BuildingList
                                        data={this.props.data}
                                        filterText={this.state.filterText}
                                        selectedUpdate={this.selectedUpdate.bind(this)}
                                        delete={this.delete.bind(this)}

                                    />
                                </table>
                            </div>
                        </div>
                        <div className="column2">
                            <ViewBuilding
                                building={this.state.building}
                            />
                        </div>
                    </div>
                    <Credit/>
                </main>
            </div>
        );
    }
}

export default App;
