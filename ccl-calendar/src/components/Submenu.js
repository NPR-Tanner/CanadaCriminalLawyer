import React, { useState } from "react";
import './../css/Submenu.css';

function Submenu(props) {
    const [submenuOpen, setSubmanuOpen] = useState(false);

    // Menu Handler functions
    function handleMouseClick() {
        setSubmanuOpen(!submenuOpen);
    }

    //console.log(props);

    return (
        <div className="mobile-submenu-parent-container" onClick={handleMouseClick}> {/* Render link that has a submenu */}
            <li className="mobile-submenu-parent-item">
                <a className="mobile-submenu-link nested-submenu-link mobile-submenu-parent-link" href={props.submenuPage}>{`> ${props.submenuPage}`}</a>
                <i className={!submenuOpen ? "fa fa-angle-down mobile-angle-down" : "fas fa-angle-up mobile-angle-up"} onClick={handleMouseClick}></i>
            </li>
            {/* Code to render the nested submenu*/}
            {/* Display the submenu if the link is hovered and the list is contained in props*/}
            {submenuOpen && props.submenuList && (
                <div id="nested-submenu-container">
                    <ul className="nested-dropdown-menu">
                        {props.submenuList.map((subItem, subIndex) => (
                            <li key={subIndex}><a className="nested-submenu-link nested-link" id="melink" href={subItem.link}>{`> ${subItem.page}`}</a></li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Submenu;