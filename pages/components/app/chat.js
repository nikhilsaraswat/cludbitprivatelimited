import React from 'react';
// This is the way to import an SVG file and then pass it as a props
import logo from '../../../public/favicon.png'

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
export default function footer() {
  return (
    <>
    <WhatsAppWidget phoneNumber="447435776475" />
    </>
);
}