import React, {useState, useEffect} from 'react';
import './Portfolio.scss'
// import MediaCard from '../card/Card';
import PortfolioList from '../portfolioList/PortfolioList';
import { designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from '../../data';
export default function Portfolio() {


    const [selected, setSelected] = useState("Probabilte")
    const [data, setData] = useState([])
    const list = [
        {   
            id: 'all',
            title: 'All'
        },
        {
            id: 'ITCS',
            title: 'ITCS'
        },
        {
            id: 'OPEN SOURCE DAYS',
            title: 'OPEN SOURCE DAYS'
        },
        {
            id: 'HDR',
            title: 'HDR'
        },
        {
            id: 'PROMOTIONS',
            title: 'PROMOTIONS'
        }
    ];

    useEffect(() => {
       switch(selected){
        case "all":
            setData(featuredPortfolio);
            break;
        case "ITCS":
            setData(webPortfolio);
            break;
        case "OPEN SOURCE DAYS":
            setData(mobilePortfolio);
            break;
        case "HDR":
            setData(designPortfolio);
            break;
        case "PROMOTIONS":
            setData(designPortfolio);
            break;
        default:
            setData(featuredPortfolio);
            break;
 }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    />               
                ))}
            </ul>

            <div className="container">
                {data.map((d) => (
                    <div key={d.id} className="item">
                        <img 
                            src={d.img}
                            alt="" 
                        />
                        {/* <h3>{d.title}</h3> */}
                    </div>
                ))}
                
            </div>
        </div>
    )
}
