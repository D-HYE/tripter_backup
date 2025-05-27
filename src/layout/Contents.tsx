import { Route, Routes } from 'react-router-dom';
import Index from "../page/mainpage/Index"
import SubContents from "../page/subpage/SubContents"

const Contents:React.FC = () => {
    return (
        <Routes>
           <Route path="/" element={<Index id="mainPage" />} />
           <Route path="/tripRoute/:tab?" element={<SubContents id="tripRoute" />} />
           <Route path="/tripTalk/:tab?" element={<SubContents id="tripTalk" />} />
           <Route path="/tripterEvent/:tab?" element={<SubContents id="tripterEvent" />} />
        </Routes>
    );
};

export default Contents;