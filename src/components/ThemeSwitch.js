import '../style/themeSwitch.css';
/**
 * @description toggle button to switch between themes
 * @param isTron {boolean}: state variable for current theme
 * @param setIsTron {function}: function to change state variable
 * @returns {JSX.Element}
 * @constructor
 */
export function ThemeSwitch({ isTron, setIsTron }) {

    // make radio box group
    // site themes, 1, 2, 3
    // Update current theme
    function changeStyle () {
        setIsTron(!isTron);
    }
    return (
        <label className="switch">
            <input type="checkbox"  onChange={changeStyle} id="_themeToggle" />
                <span className="slider"></span>
        </label>
    );
}

