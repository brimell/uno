import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

import randomCodeGenerator from '../utils/randomCodeGenerator'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')
    const [name, setName] = useState(null)

    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
                <div className="homepage-header">
                    <img src={require('../assets/logo.png').default} alt='' width='200px' />
                    <TextField
                        label='Name'
                        variant="filled"
                        className="input"
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className='homepage-form'>
                    <div className='homepage-join'>
                        <Input placeholder='Game Code' onChange={(event) => setRoomCode(event.target.value)} className="input" />
                        <Button onClick={() => {
                            if (name.length > 3) {
                                if (roomCode) {
                                window.href = `/play?roomCode=${roomCode}`
                                } else {
                                    alert('Please enter a game code')
                                }
                            } else {
                                alert('Please enter a name longer than 3 characters')
                            }
                        }} variant="contained" className="btn">Join Game</Button>
                    </div>
                    <h1>OR</h1>
                    <div className='homepage-create'>
                        <Button variant="contained" onClick={() => {
                            if (name.length > 3) {
                                window.href = `/play?roomCode=${randomCodeGenerator(5)}`
                            } else {
                                alert('Please enter a name longer than 3 characters')
                            }
                        }} className="btn">Create Game</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
