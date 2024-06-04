'use client';
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Butterfly_Kids } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <div className='w-screen'>
      <AppBar
        position='fixed'
        className='bg-black flex flex-row justify-between p-7'>
        <button onClick={() => setDrawerVisible(true)}>
          <MenuIcon />
        </button>
        <Drawer
          anchor='left'
          open={drawerVisible}
          sx={{ bgcolor: 'black' }}
          onClose={() => setDrawerVisible(false)}>
          <List>
            {['ABOUT', 'NEWS', 'RACE', 'LOGIN'].map((text) => (
              <ListItem key={text}>
                <p className='text-white p-4'>{text}</p>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          sx={{
            marginRight: '16px',
            '@media (max-width: 900px)': {
              display: 'none',
            },
          }}>
          <button className='mr-3'>ABOUT</button>
          <button className='mr-3'>NEWS</button>
          <button className='mr-3'>RACE</button>
          <button>LOGIN</button>
        </Box>
      </AppBar>
      <div className='w-full h-screen'>
        <video
          src='https://www.mercedes-amg.com/en/home/vehicles/customer-racing/mercedes-amg-gt2-pro/mercedes-amg-gt2-pro/_jcr_content/root/stage/media/slides/slide/media1/video.video.20231030155019.mp4'
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-screen flex flex-row'>
        <nav className='w-1/2 bg-black'>
          <a
            href='http://www.gruppem-amg.com/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='http://www.gruppem-amg.com/images/logo_merc.svg'
              alt='Image Description'
              className='object-contain w-full h-full p-5'
            />
          </a>
        </nav>
        <nav className='w-1/2 bg-black flex justify-center items-center'>
          <a
            href='https://www.mercedes-amg.com/en/home/vehicles/customer-racing/mercedes-amg-gt2-pro/mercedes-amg-gt2-pro.html'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='https://scontent.fkhh1-1.fna.fbcdn.net/v/t39.30808-6/279186919_5017919994959748_260330562735693748_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jMgUlOVVJnMQ7kNvgHZCVcH&_nc_ht=scontent.fkhh1-1.fna&oh=00_AYCCi9bR6KeClxaNIAbg0njeRoZrHBUiejrOXnrMwZZWQw&oe=666484C1'
              alt='Image Description'
              className='object-contain w-full h-full p-5'
            />
          </a>
        </nav>
      </div>
    </div>
  );
}
