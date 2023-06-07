import './Filter.css';

const Filter = () => {
    return(
        <div className="filter-holder">
            <section>
                <h5>Gender</h5>
                <div>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label htmlFor="female">Female</label>
                </div>
            </section>
            <section>
                <h5>Color</h5>
                <div>
                    <input type="checkbox" id="white-color" name="color" value="white"/>
                    <label htmlFor="white-color">White</label>
                </div>
                <div>
                    <input type="checkbox" id="blue-color" name="color" value="blue"/>
                    <label htmlFor="blue-color">Blue</label>
                </div>
                <div>
                    <input type="checkbox" id="red-color" name="color" value="red"/>
                    <label htmlFor="red-color">Red</label>
                </div>
            </section>
            <section>
                <h5>Brand</h5>
                <div>
                    <input type="checkbox" id="vanhuesan" name="vanhuesan" value="vanhuesan"/>
                    <label htmlFor="vanhuesan">Van Huesan</label>
                </div>
                <div>
                    <input type="checkbox" id="roadster" name="roadster" value="roadster"/>
                    <label htmlFor="roadster">Roadster</label>
                </div>
            </section>
        </div>
    )
}
export default Filter;