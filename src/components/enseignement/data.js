import { FaDiceSix, FaChartLine } from 'react-icons/fa';
// import { RiFunctions } from 'react-icons/ri';
import { RiBarChartLine, RiCodeSSlashLine } from "react-icons/ri";

const data = [
    {
        id:"1",
        title:"Probabilite",
        icon:<FaDiceSix size={30} style={{color:'#f8f9fa'}}/>,
        desc:"Premiere annee cycle d'ingenieur IID et Tronc commun, ENSA KHOURIBGA",
        link:"Probabilite"
    },
    {
        id:"2",
        title:"Statistiques",
        icon:<FaChartLine size={30} style={{color:'#f8f9fa'}}/>,
        desc:"Premiere annee cycle d'ingenieur IID et Tronc commun, ENSA KHOURIBGA",
        link:"Statistiques"
    },
    {
        id:"3",
        title:"Machine Learning",
        icon:<RiCodeSSlashLine size={30} style={{color:'#f8f9fa'}}/>,
        desc:"Deuxieme annee cycle d'ingenieur IID, ENSA KHOURIBGA",
        link:"ML"
    },
    {
        id:"4",
        title:"Analyse de donnees",
        icon:<RiBarChartLine size={30} style={{color:'#f8f9fa'}} />,
        desc:"Deuxieme annee cycle d'ingenieur IID, ENSA KHOURIBGA",
        link:"AD"
    },
];

export default data;