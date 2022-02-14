import React from 'react';
import styles from './YandexControls.module.css'
import Input from "@mui/material/Input";

const YandexControls = () => {
    return (
        <div className={styles.yandexControls}>
            <Input defaultValue="Hello world" />
            <Input placeholder="Placeholder" />
            <Input disabled defaultValue="Disabled" />
            <Input defaultValue="Error" error />
        </div>
    );
};

export default YandexControls;