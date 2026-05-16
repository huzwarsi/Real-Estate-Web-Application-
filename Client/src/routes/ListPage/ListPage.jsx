import React from 'react'
import { listData } from '../../lib/dummyData'
import './ListPage.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/card/card'
import Map from '../../components/Map/Map'

const ListPage = () => {
    const data = listData
  return (
    <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
                {data.map((item)=>{
                    return <Card key={item.id} item={item}/>
                })}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data}/>
        </div>
    </div>
  )
}

export default ListPage