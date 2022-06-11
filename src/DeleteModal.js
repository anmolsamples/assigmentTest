import React from 'react'


 function DeleteModal({setDeleteModal}) {


  return (
      <>
    
    <div className='modal'>
            <div className='modalWrapper'>
                
                <p className="mtl2">Click delete to confirm</p>
               
               <div className="actionButtons">
               <button className="cancel m1" onClick={() => setDeleteModal(false)}>Cancel</button>
                   <button className="save m1"  >Delete</button>
               </div>
            </div>
        </div> 
    
    </>
  )
}

export default DeleteModal
