import React from 'react';
import { AppComponent } from './Contents/list';

interface Props {
    appName: string;
}

export default function Content({ appName }: Props) {
    return <AppComponent name={appName} />;
}