import { Route, Routes } from 'react-router-dom';
import Index from "../page/mainpage/Index"
import SubContents from "../page/subpage/SubContents"
import User from "../page/subpage/user/User";

const Contents:React.FC = () => {
    return (
        <Routes>
           <Route path="/" element={<Index id="mainPage" />} />
           <Route path="/user/:page?" element={<User />} />
           <Route path="/bbs/:tab?" element={<SubContents id="bbs" />} />
           <Route path="/tripRoute/:tab?" element={<SubContents id="tripRoute" />} />
           <Route path="/tripTalk/:tab?" element={<SubContents id="tripTalk" />} />
           <Route path="/tripterEvent/:tab?" element={<SubContents id="tripterEvent" />} />

        </Routes>
    );
};

export default Contents;