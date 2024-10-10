import styled from "styled-components";
import ChangeCircleLoacte from "../changeLocate";
import MouseCircle from "../mouseCircle";
import { Routes, Route } from 'react-router-dom';  // Routes 추가
import StartPage from "../StartPage";

const Header = styled.div`
    
`;

function HeaderWrapper() {
    return (
        <Header>
            <Routes>  
                <Route path="/" element={<StartPage />} />  
                <Route path="/play" element={
                    <>
                        <ChangeCircleLoacte />
                        <MouseCircle />
                    </>
                } />
            </Routes>
        </Header>
    );
}

export default HeaderWrapper;
