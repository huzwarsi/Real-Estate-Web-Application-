import { listData } from '../../lib/dummydata';
import Card from '../card/card';
import './List.scss';

export default function List(){
    return(
        <div className="list">
            {listData.map(item=>(<Card key={item.id}item={item}/>))}
        </div>
    )
}