import React, { useState } from "react";
import { connect } from "react-redux";
import { onAddingItem } from "../../action";

import "./item-add-form.css";

const ItemAddForm = ({ onAdd }) => {
    const [lable, onLabelChange] = useState("");

    const onSubmiting = (e) => {
        e.preventDefault();

        let labelCopy = lable;
        if (labelCopy.trim().length !== 0) {
            onAdd(labelCopy);
        }
        onLabelChange("");
    };

    const onChange = (e) => {
        onLabelChange(e.target.value);
    };
    return (
        <div className="item-add">
            <form onSubmit={onSubmiting} className="item-add-form d-flex">
                <input
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    value={lable}
                />
                <button className="btn btn-outline-secondary">Add</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    onAdd: onAddingItem
};

export default connect(null, mapDispatchToProps)(ItemAddForm);
