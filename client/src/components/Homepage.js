import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import randomCodeGenerator from '../utils/randomCodeGenerator'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')

    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
                <img src={require('../assets/logo.png').default} alt='' width='200px' />
                <div className='homepage-form'>
                    <div className='homepage-join'>
                        <Input placeholder='Game Code' onChange={(event) => setRoomCode(event.target.value)} className="input" />
                        <Button onClick={() => {
                            if (roomCode) {
                                window.href = `/play?roomCode=${roomCode}`
                            } else {
                                alert('Please enter a game code')
                            }
                        }} variant="contained" className="btn">Join Game</Button>
                    </div>
                    <h1>OR</h1>
                    <div className='homepage-create'>
                        <Link to={`/play?roomCode=${randomCodeGenerator(5)}`}><Button variant="contained" className="btn">Create Game</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
