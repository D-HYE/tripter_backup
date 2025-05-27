import { Route, Routes } from 'react-router-dom';
import Index from "../page/mainpage/Index"
import TripRoute from "../page/subpage/SubContents"

const Contents:React.FC = () => {
    return (
        <Routes>
           <Route path="/" element={<Index id="mainPage" />} />
           <Route path="/tripRoute/:tab?" element={<TripRoute id="tripRoute" />} />
           <Route path="/tripTalk/:tab?" element={<TripRoute id="tripTalk" />} />
        </Routes>
    );
};

export default Contents;