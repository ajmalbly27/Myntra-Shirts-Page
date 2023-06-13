import { useContext } from 'react';
import './Filter.css';
import { AppContext } from '../../context/AppContext';

const Filter = () => {

    const { allFilter, maleFilter, femaleFilter, roadster, wrong, highlander } = useContext(AppContext);
 
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
                <h5>Brand</h5>
                <div>
                    <input type="checkbox" id="roadster" name="roadster" value="roadster"
                        onClick={roadster}
                    />
                    <label htmlFor="roadster">Roadster</label>
                </div>
                <div>
                    <input type="checkbox" id="wrong" name="wrong" value="wrong"
                        onClick={wrong}
                    />
                    <label htmlFor="wrong">Wrong</label>
                </div>
                <div>
                    <input type="checkbox" id="highlander" name="highlander" value="highlander"
                        onClick={highlander}
                    />
                    <label htmlFor="highlander">Highlander</label>
                </div>
            </section>
        </div>
    )
}
export default Filter;