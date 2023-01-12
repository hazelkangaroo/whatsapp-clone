import React from 'react'
import './Chat.css'
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chat() {
  return (
    <div className='chat'>


      {/* header */}
      <div className='chat_header'>
        <Avatar />

        <div className='chat_headerInfo'>
          <h3>Chat Room</h3>
          <p>last seen at </p>
        </div>

        <div className='chat_headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>



       {/* chat body */}
       <div className='chat_body'>
          <p className='chat_message'>
            <span className='chat_name'>Name</span>
            This is a message
            <span className='chat_timestamp'>
              {new Date().toUTCString()}
            </span>
          </p>
        </div>

    </div>
  )
}

export default Chat
