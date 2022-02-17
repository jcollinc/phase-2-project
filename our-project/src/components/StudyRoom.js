import React, { useEffect, useState } from 'react'
import Card from './Card'

function StudyRoom() {

	const [coffees, setCoffees] = useState([])
	const [id, setId] = useState(null)
	const [coffeeOrder, setCoffeeOrder] = useState([])
	const [name, setName] = useState(null)
	const [modal, setModal] = useState(false)

	let newOrder;

	useEffect(() => {
		fetch('http://localhost:3000/coffees')
		.then(res => res.json())
		.then(coffees => {
			setCoffees(coffees)
		})
	}, [])

	let itemsToDisplay = coffees
		.map(coffee => {
			return (
				<Card 
					coffee={coffee} 
					key={coffee.id} 
					coffeeOrder={coffeeOrder}
					id={id} 
					handleClaim={handleClaim}
				/>
			)		
		}
	)

	function handleDropdownChange (e) {
		e.target.value.length > 0 ? setId(e.target.value) : setId(null)
		setName(e.target.options[e.target.selectedIndex].text)
		setCoffeeOrder([])
		newOrder = {}
	}

	function handleClaim (e) {
		if (e.target.innerText === "Order") {
			e.target.innerText = "Ordered!"
			e.target.className = "button-claimed"
		}
		else {e.target.innerText = "Order"
			  e.target.className = "card_button"}
		coffees.map(coffee => {
			if (coffee.title === e.target.id && !coffeeOrder.includes(coffee.title)) {
				setCoffeeOrder(coffeeOrder => [...coffeeOrder , coffee.title])
				console.log(coffeeOrder)
			}
			else if (coffee.title === e.target.id && coffeeOrder.includes(coffee.title)) {
				setCoffeeOrder(coffeeOrder => coffeeOrder.filter(coffee => coffee!== e.target.id))
				console.log(coffeeOrder)
			}
		})
	}

	function handleSubmit () {
		newOrder = {order : coffeeOrder}
		console.log(newOrder)
		fetch (`http://localhost:3000/cohorts/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json", 
				"Accept": "application/json"},
			body: JSON.stringify(newOrder)
      })
				.then(r => r.json())
				.then(() => {
					setCoffeeOrder([]);
					setModal(true)
				})
  	}
	
	let val = 1;
	let cohort = 
	["Tyler", "Aaron", "Chun", "Daniel", "Ethan", "Felipa", 
	"Hamzah", "Jon", "Matt", "Mohammed", "Vanessa", "Yeohoon"]
	let selector = cohort.map(member => {return (<option key={val++} value={val++}>{member}</option>)})
	
  return (
    <div>
      <div className="dropdown-div">
		<p className={name ? "hello" : "welcome"}>
			{id ? `Hello ${name}, what would you like to order?` : "Welcome to the study room!"}
		</p>
	  	<select onChange={handleDropdownChange} className="dropdown">
			<option value="">Please select name:</option>
			{selector}
		</select>
      </div>
      <div className="cards">
        {itemsToDisplay}
      </div>
	  <div className="submit-div">
	  	{coffeeOrder.length === 0 ? null : <button onClick={handleSubmit} className="card_button">Submit Order</button>}
		<div className={modal ? 'modal-active' : 'modal'} id='modal'>
			<div className='modal-header'>
				<div className='title'>Submitted!</div>
				<button onClick={() => setModal(false)}className='close-button'>x</button>
			</div>
			<div className='modal-body'>
				~Coming right up~ 
			</div>
		</div>
		<div id={modal ? 'overlay-active' : 'overlay'}> </div>
	  </div>
    </div>
  )
}

export default StudyRoom