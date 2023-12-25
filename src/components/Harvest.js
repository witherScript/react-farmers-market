import React from "react";
import PropTypes from "prop-types"
function Harvest(props) {
  return (
    <React.Fragment>
      <h3>Month: {props.month}</h3>
      <ul>
        {props.selection.map((fruit, index) =>
          <li key={index}>{fruit}</li>
      )}
      </ul>
    </React.Fragment>
  )

}

Harvest.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default Harvest;