'use client' 
import { createTheme } from '@mui/material/styles';
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: robotoMono.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: { main: '#51d5fd' },
  }
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: robotoMono.style.fontFamily,
  },
  palette: {
    mode: 'light',
    primary: { main: '#51d5fd' }
  }
});
