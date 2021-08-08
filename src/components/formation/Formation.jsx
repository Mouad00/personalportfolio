import React from 'react'
import './Formation.scss';

import {ReactComponent as WorkIcon} from '../timeline/work.svg';
import {ReactComponent as SchoolIcon} from '../timeline/school.svg';
import TimelineElements from '../timeline/TimelineElements';

import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";
function Formation() {
    let workIconStyles = {background : "#06D640"}
    let schoolIconStyles = {background : "#f9c74f"}
    return (
        <div className="formation" id="formation">
            <h1>Formation</h1>
            <div className="">

            <VerticalTimeline>
                {
                    TimelineElements.map((element) => 
                        { 
                            let isWorkIcon = element.icon === "work";
                            let showButton =
                                element.buttonText !== undefined &&
                                element.buttonText !== null &&
                                element.buttonText !== "";
                        return (
                            !isWorkIcon ? (
                        <VerticalTimelineElement
                            key={element.id}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            // contentStyle={{background: '#000'}}
                            contentArrowStyle={{background: '#000'}}
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        >
                            <time>
                                {element.date}
                            </time>
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                            {showButton && (
                                <a href="/" 
                                    className={`button ${
                                        isWorkIcon ? "workButton" : "schoolButton"
                                    }`}
                                >{element.buttonText}</a>
                            )}

                        </VerticalTimelineElement>): null
                    )})
                }
            </VerticalTimeline>
            </div>
        </div>
    )
}

export default Formation
