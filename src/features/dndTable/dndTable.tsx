import React, { useState, useEffect } from 'react';
const tableDragger = require("table-dragger");

export function DndTable() {

    useEffect(() => {
        const el = document.getElementById("dndTable");
        tableDragger.default(el, {
            mode: "free",
            onlyBody: false,
            dragHandler: ".handle",
            animation: 300
        })
    }, []);

    return (
        <>
            <div className="container">
                <h1 >Drag and Drop React-Table</h1>
                <table className="table" id="dndTable">
                    <thead className="tableHead">
                    </thead>
                    <tbody className="tableBody">
                    </tbody>
                </table>
            </div>
        </>
    );
}