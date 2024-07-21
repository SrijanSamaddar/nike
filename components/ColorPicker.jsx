import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';


const Customizer = () => {
  const snap = useSnapshot(state);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleColorChange = (color) => {
    state.color = color.hex;
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div>
      <button style={{backgroundColor: state.color}} className='max-sm:text-[3vw] max-sm:px-[10vw] max-sm:py-[.5vw] max-sm:rounded-md bg-[#222] rounded-md py-2 text-white font-[500] px-5' onClick={openDrawer}>Color Picker</button>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <SketchPicker
          disableAlpha
          color={snap.color}
          onChange={handleColorChange}
        />
      </Drawer>
    </div>
  );
};

export default Customizer;
