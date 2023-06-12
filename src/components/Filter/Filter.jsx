import { useContext } from 'react';
import './Filter.css';
import { AppContext } from '../../context/AppContext';

const Filter = () => {

    const { femaleFilter } = useContext(AppContext);
    const { maleFilter } = useContext(AppContext);
    const { allFilter } = useContext(AppContext);
 
    return(
        <div className="filter-holder">
            <section>
                <h5>Gender</h5>
                <div>
                    <input type="radio" id="all" name="gender" value="all"
                        onClick={allFilter}
                    />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="radio" id="male" name="gender" value="male"
                        onClick={maleFilter}
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input type="radio" id="female" name="gender" value="female"
                        onClick={femaleFilter}
                    />
                    <label htmlFor="female">Female</label>
                </div>
            </section>
            <section>
                <h5>Catogories</h5>
                <div>
                    <input type="checkbox" id="white-color" name="color" value="white"/>
                    <label htmlFor="white-color">Sleeve Shirts</label>
                </div>
                <div>
                    <input type="checkbox" id="blue-color" name="color" value="blue"/>
                    <label htmlFor="blue-color">Folded Sleeve Shirts</label>
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