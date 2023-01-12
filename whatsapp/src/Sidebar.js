import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <div className='sidebar_headerRight'>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>


      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchIcon />
          <input type='text' placeholder='Search or Start new chaddt' />
        </div>
      </div>


      <div className='sidebar_chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

      </div>


    </div>
  )
}

export default Sidebar
