import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FrameworkList";
import FrameworkListSearch from "./FrameworkListSearch";
import Responsive from "./Responsive";

createRoot (document.getElementById("root"))
    .render(
        <div>
            <FrameworkList/>
            <FrameworkListSearch/>
            {/* <Responsive/> */}
        </div>
    )