import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  return (
    <div>
      <Link to={"/edit/" + props.id}>
        <h2>{props.description} </h2>
      </Link>
      {props.amount}-{props.createdAt}
    </div>
  );
};

export default connect()(ExpenseListItem);
