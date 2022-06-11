import React,{ useState} from 'react'
import './App.css'
import DeleteModal from './DeleteModal.js'

function Item({ data, color,key}) {
    const [showDeleteModal,setDeleteModal]=useState(false);

  

return (
        <>
        {console.log(key)}
        <div className="item" style={{borderTop: `4px solid ${color}` }}>
            {data}
            

            <div>
            {showDeleteModal &&
                (<DeleteModal
                    showDeleteModal={showDeleteModal}
                    setDeleteModal={setDeleteModal}
                   
            ></DeleteModal>)}
            </div>
            <button className='addNew1' onClick={() => setDeleteModal(true)}>Delete Item</button>

        
        </div>
        
             
        
        </>
    )
}

export default Item;