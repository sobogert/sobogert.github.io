import '../style/themeSwitch.css';
/**
 * @description toggle button to switch between themes
 * @param selectedTheme {number}: state variable for current theme
 * @param setSelectedTheme {function}: function to change state variable
 * @returns {JSX.Element}
 * @constructor
 */
export function ThemeSwitch({ selectedTheme, setSelectedTheme }) {

    // make radio box group
    // site themes, 1, 2, 3
    // Update current theme
    function changeStyle (event) {
        if (event) {
            console.log(event);
        }
        setSelectedTheme(selectedTheme);
    }
    return (
        <label className="switch" >
            <label>
                <input type={"radio"} name={"themeSwitch"} title="site style version 1" onChange={changeStyle} id={"_professionalTheme"} value={1} checked/>
                V1
            </label>
            <label>
                <input type={"radio"} name={"themeSwitch"} title="site style version 2" onChange={changeStyle} id={"_colorTheme"} value={2} />
                    V2
            </label>
            <lable>
                <input type={"radio"} name={"themeSwitch"} title="site style version 3" onChange={changeStyle} id={"_tronTheme"} value={3} />
                    V3
            </lable>
        </label>
    );
}

