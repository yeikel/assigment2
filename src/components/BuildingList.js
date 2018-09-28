import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

class BuilingList extends React.Component {

    constructor(props) {
        super(props);
    }

    clicked(id) {
        this.props.selectedUpdate(id);
    }

    delete(id) {
        this.props.delete(id);
    }


    render() {
        let data = this.props.data;
        let filter = this.props.filterText;

        let buildingList = data.filter(e => {

            let searchTerms = e.name.toLowerCase();

            const includedInName = searchTerms.includes(filter.toLowerCase());
            const includedInCode = searchTerms.includes(filter.toLowerCase());
            return includedInName || includedInCode;
        }).map(directory => {
            return (
                <tr>
                    <td>{directory.code} </td>
                    <td key={directory.id} onClick={() => {
                        this.clicked(directory.id);
                    }}> {directory.name}  </td>
                    <IconButton onClick={() => {
                        this.delete(directory.id);
                    }} aria-label="Delete">
                        <SvgIcon>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </SvgIcon>
                    </IconButton>
                </tr>

            );
        });

        return <div>{buildingList}</div>;
    }
}

export default BuilingList;
