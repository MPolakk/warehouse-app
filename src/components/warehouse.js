import React from 'react';
import '../styles/warehouse.scss'
import WareHouseList from './warehouse_list';

class WareHouse extends React.Component {


 render() 
 
 {
   return (
     
     <div className='warehouse-container'>
      <button className='warehouse__list box'>Wszystkie przedmioty</button>
      <button className='warehouse__add box'>Dodaj przedmiot</button>
      <button className='warehouse__find box'>Znajdz przedmiot</button>
      <WareHouseList/>
      
     </div>
    
   )

 }




}

export default WareHouse