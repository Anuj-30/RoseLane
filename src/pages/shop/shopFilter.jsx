import React from 'react'

const shopFilter = ({filters,filterState,setfilterState,clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
        <h3>Filters</h3>

        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Category</h4>
            <hr/>
            {
                filters.categories.map((category)=>(
                    <label key={category} className='capitalize cursor-pointer'>
                        <input 
                            type='radio' 
                            name='category' 
                            id='category'
                            value={category} 
                            checked={filterState.category === category} 
                            onChange={(e) => setfilterState({...filterState, category: e.target.value})}    ></input>
                            <span className='m1-1'>{category}</span>
                        </label>
                )
                )
            }

        </div>
    </div>
  )
}

export default shopFilter