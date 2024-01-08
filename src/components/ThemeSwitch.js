import '../style/themeSwitch.css';
/**
 * @description toggle button to switch between themes
 * @param isTron {boolean}: state variable for current theme
 * @param setIsTron {function}: function to change state variable
 * @returns {JSX.Element}
 * @constructor
 */
export function ThemeSwitch({ isTron, setIsTron }) {

    // Update current theme
    function changeStyle () {
        setIsTron(!isTron);
    }
    return (
        <label Class="switch">
            <input type="checkbox"  onChange={changeStyle} id="_themeToggle" />
                <span Class="slider"></span>
        </label>
    );
}

