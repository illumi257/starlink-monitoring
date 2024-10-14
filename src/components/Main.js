import React from 'react'

const branches = [
    {code: 'B0460_O', name: 'B0460 Bontoc Outpost II'},
    {code: 'B0481_O', name: 'B0481 Bauko Outpost'},
    {code: 'B0989_M', name: 'B0989 Besao Mother'},
    {code: 'B1369_M', name: 'B1369 Atok Mother'},
    {code: 'B1369_O', name: 'B1369 Atok Outpost'},
    {code: 'B1584_M', name: 'B1584 Cervantes Mother'},
    {code: 'B1584_O', name: 'B1584 Cervantes Outpost'},
    {code: 'B1652_O', name: 'B1652 Baguio City IV Outpost'},
    {code: 'B1750_M', name: 'B1750 Bokod Mother'},
    {code: 'B1754_M', name: 'B1754 Sabangan Mother'},
];

const Main = () => {
  return (
    <div className='container text-center py-3'>
        <div className='row'>
            <div className='col'>
                <BranchesSelection />
            </div>
            <div className='col'>
                
            </div>
            <div className='col'>
                
            </div>
        </div>
    </div>
  )
}

const BranchesSelection = () => {
    return (
        <select className='form-select' aria-label='Branches'>
            <option selected disabled>-Select Branch-</option>
            {
                branches.map(branch => (
                    <option value={branch.code}>{branch.name}</option>
                ))
            }
        </select>
    )
}

export default Main
