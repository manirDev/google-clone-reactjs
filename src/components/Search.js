import React, { useState } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import {Button} from "@material-ui/core"
import { useNavigate } from 'react-router-dom'
import {useStateValue} from '../context/StateProvider'
import {actionTypes} from '../context/reducer'

function Search({hideButtons = false, searchLink}) {
  const[{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const navigate = useNavigate()

  const search = (e) =>{
    e.preventDefault();
    console.log('typed')
    //do something with input
    dispatch({
       type: actionTypes.SET_SEARCH_TERM,
       term: input 
    })

    navigate(searchLink)
  }
  return (
    <form className='search'>
        <div className="search_input">
          <SearchIcon className="search_inputIcon" />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <MicIcon />
        </div>
        {!hideButtons ? (
          <div className="search_buttons">
          <Button type="submit" onClick={search}>Google Search</Button>
          <Button variant="outlined">ManirDev 🚀</Button>
        </div>
        ) : (
          <div className="search_buttons">
          <Button className='search_buttonsHidden' type="submit" onClick={search}>Google Search</Button>
          <Button className='search_buttonsHidden' variant="outlined">I'm feeling Lucky</Button>
        </div>
        )}
    </form>
  )
}

export default Search