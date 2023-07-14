import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{fontSize: 100}} className='!bg-slate-950 !shadow-2xl !shadow-black'>
        <Toolbar>
          <Typography className='!font-bold !text-2xl !mt-3 text-orange-400' component={'div'} sx={{flexGrow:1}}>
            <StorefrontIcon  className='!mr-2 mb-1'/>
            Grocery Shop
          </Typography>
          <Box> 
            <ul className='!font-sans !text-lg !text-white flex space-x-12'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/items'}>Manage Items</Link></li>
              <li><Link to={'/customer'}>Manage Customer</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
             <div className='flex space-x-2'>
             <Button className='!bg-green-700'><Link to={'/signUp'} className='!text-white'>Sign Up</Link></Button>
              <Button className='!bg-red-600'><Link to={'/login'} className='!text-white'>Login</Link></Button>
             </div>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
 
   </>
  )
}

export default Header