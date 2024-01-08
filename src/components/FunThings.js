import '../style/funThings.css';

export function FunThings({ isTron }) {

    return (
        <div className="section" id="fun">
            <h2 className={"fun-title"}>Some Things I Do for Fun</h2>
            <div className="fun-container">
                {
                    !isTron ?
                        <div className="fun-background"></div>
                        : null
                }
                <div className="fun-items">
                    <span>&#9758;  Creating 2d animations</span>
                    <span>&#9758;  Drumming</span>
                    <span>&#9758;  Rowing</span>
                    <span>&#9758;  Rock Climbing</span>
                    <span>&#9758;  Website Building</span>
                </div>
            </div>
        </div>
    );
}