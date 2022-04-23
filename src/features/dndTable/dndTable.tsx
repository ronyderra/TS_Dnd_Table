import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectDndTableData } from './dndTableSlice';
import Cloumn from './Column/column'
import Row from './Row/row'
import tableHeaderData from '../../tableHeaderData'
const tableDragger = require("table-dragger");

export function DndTable() {
    const dndData = useAppSelector(selectDndTableData);

    useEffect(() => {
        console.log(dndData)
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
                        <Cloumn data={tableHeaderData} />
                    </thead>
                    <tbody className="tableBody">
                        <Row data={dndData} />
                    </tbody>
                </table>
            </div>
        </>
    );
}