import React from 'react'

function CreateNewUser() {
  return (
    <div>
        <div className="p-2">
            <h3 className="text-lg font-semibold text-center">Create New User</h3>
            <form>
              <div className='flex flex-col py-2'>
                <label >First Name</label>
                <input type="text" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2' >
                <label >Middle Name</label>
                <input type="text" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2'>
                <label >Last Name</label>
                <input type="text" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2'>
                <label >Users Name</label>
                <input type="text" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2'>
                <label >Email</label>
                <input type="email" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2'>
                <label >Password</label>
                <input type="text" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2'>
                <label >Type</label>
                <input type="text" className='border py-1'/>
              </div>
              <div className='flex flex-col py-2'>
                <label >Avator</label>
                <input type="text" className='border py-1'/>
              </div>
              <button className="bg-blue-600 px-3 py-2 rounded text-white mr-2">Save</button>
              <button className="bg-red-600 px-3 py-2 rounded text-white">Cancel</button>
            </form>
          </div>
    </div>
  )
}

export default CreateNewUser