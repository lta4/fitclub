import React from "react";
import "./Programs.css";
import {programsData} from "../../data/programsData";


const Programs = () => {
    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className="stroke-text">Explore</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you</span>
            </div>
            
            <div className="program-catergories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.img}
                        <span>{program.heading}</span><span>{program.details}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs