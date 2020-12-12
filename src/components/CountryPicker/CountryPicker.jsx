import React from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                <option value='global'></option>
                 
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;