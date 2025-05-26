import { Route, Routes } from 'react-router-dom';
import Index from "../page/mainpage/Index"

const Contents:React.FC = () => {
    return (
        <Routes>
           <Route path="/" element={<Index id="mainPage" />} />
        </Routes>
    );
};

export default Contents;