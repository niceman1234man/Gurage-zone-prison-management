import React from 'react'

function SystenmInformation() {
  return (
    <div>
        <h3 className="border-b border-t-4 border-t-gray-900 font-semibold text-lg text-center p-4">
            System Information
          </h3>
          <form className="flex flex-col space-y-3 p-2">
            <div className="flex flex-col">
                <label>
                    System Name
                </label>
                <input type="text" className="border py-2 mt-2" />
            </div>
            <div className="flex flex-col">
                <label >System Short Name</label>
                <input type="text"  className="border py-2 mt-2"  />
            </div>
            <div className="flex flex-col">
                <label >System Logo</label>
                <input type="file"  className="border py-2 mt-2" />
            </div>
            <div className="flex flex-col">
                <label >Website Cover</label>
                <input type="file"  className="border py-2 mt-2" />
                <div className="w-full h-64 p-2">
                    <img src="" alt="" />
                </div>
            </div>
            <button type="submit" className="bg-blue-600 w-20 py-2 px-3 rounded">Update</button>
          </form>
    </div>
  )
}

export default SystenmInformation