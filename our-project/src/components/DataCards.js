import React, { useEffect, useState } from 'react'
import Card from './Card'


function DataCards() {

	const [coffees, setCoffees] = useState([])
	const [fName, setFname] = useState('')
	const [error, setError] = useState('')

	// Keeping these just in case.
	// const [title, setTitle] = useState('');
	// const [description, setDescription] = useState('');
	// const [image, setImage] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/coffees')
		.then(res => res.json())
		.then(coffees => {
			console.log('hi from DataCards', coffees)
			setCoffees(coffees)
		})
	}, [])

	let itemsToDisplay = coffees
		.map(coffee => {
			return (
				<Card coffee={coffee} key={coffee.id} />
			)
				
		}
	)

	//create a new array, add the new item, then sets the coffees obj
	function handleAddItem(newItem) {
		const updatedCards = [newItem, ...coffees]
		setCoffees(updatedCards)
	}

	function handleSubmit(e) {
		e.preventDefault();

		//TODO: additional inputs: Extra shots, etc.
		const formData = { fName }
		
		{/* Controlled form input validation! */}
		if (fName.length > 0) {
			setError([])

			fetch("http://localhost:3000/coffees", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
			})
				.then(res => res.json())
				.then(newItem => {
					handleAddItem(newItem)
			})
		} else {
			setError(["All inputs are required!"])
		}
	}

  return (
    <div>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor='fName'>Please enter a name for the order:</label>
          <input
            type='text'
            id='fName'
            value={fName}
            onChange={e => setFname(e.target.value)}
          />		
          <button type="submit">Submit</button>
          
          {/* And the error state */}
          {
            error.length > 0
              ? error.map((error, index) => (
                <p key={index} style={{ color: "red" }}>
                  {error}
                </p>
              ))
              : null
          }
        </form>
      </div>
      <div className="cards">
        {itemsToDisplay}
      </div>
    </div>
  )
}

export default DataCards