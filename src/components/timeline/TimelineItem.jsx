// import React from 'react'
import './TimelineItem.scss'
// function TimelineItem({data}) {
//     return (
//         // <div className="timeline-item">
//         //     <div className="timeline-item-content">
//         //         <span className="tag" style={{background: data.category.color}}>
//         //             {data.category.tag}
//         //         </span>
//         //         <time>{data.date}</time>
//         //         <p>{data.text}</p>
//         //         {data.link && <a 
//         //             href={data.link.url}
//         //             rel="noopener noreferrer"
//         //         >
//         //             {data.link.text}
//         //         </a>}
//         //         <span className="circle">
                    
//         //         </span>
//         //     </div>
//         // </div>
//         <div className="timeline">

//         </div>
//     )
// }

// export default TimelineItem
// import React from 'react'
import {ReactComponent as WorkIcon} from './work.svg';
import {ReactComponent as SchoolIcon} from './school.svg';
import TimelineElements from './TimelineElements';

import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";



function TimelineItem() {

    let workIconStyles = {background : "#06D640"}
    let schoolIconStyles = {background : "#f9c74f"}

    return (
        <div>
            {/* <h1 className="title">Career</h1> */}
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
                            isWorkIcon ? (
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
    )
}

export default TimelineItem

