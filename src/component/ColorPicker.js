import React, { useState , useEffect , useRef } from 'react';
import {  Box } from '@mui/material';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ customize , setCustomization , colors , setColors }) => {


    // const resumeleftBgColor = useSelector((state) => state.resume.bgColorResumeLeft);
    // const [resumeLeftBg, setResumeLeftBg] = useState(customize);
    // const [ color, setColor] = useState(customize);

    const [showColorPicker, setShowColorPicker] = useState(false);
    const colorPickerRef = useRef(null); // Reference for the color picker

    const handleColorChange = (color) => {
        const newColors = color.hex; // Get the hex color value
        setColors(newColors); // Update local state
        setCustomization(newColors); // Dispatch the new color to Redux
      };
    
      // Effect to close the color picker when clicking outside
      useEffect(() => {
        const handleClickOutside = (event) => {
          // Check if the click is outside the color picker and text field
          if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
            setShowColorPicker(false);
          }
        };
    
        // Add event listener to document
        document.addEventListener('mousedown', handleClickOutside);
    
        // Cleanup event listener on component unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [colorPickerRef]);

    return (
        <>          
        <Box
            className='color-picker-btn'
            onClick={() => setShowColorPicker(true)}
            sx={{ bgcolor: colors }}
        />

            {/* Color Picker */}
            {showColorPicker && (
                <Box ref={colorPickerRef} sx={{ position: 'absolute', zIndex: 2 }}>
                    <SketchPicker
                        color={colors}
                        onChangeComplete={handleColorChange} // Handle color change
                    />
                </Box>
            )}

        </>
    )
}

export default ColorPicker