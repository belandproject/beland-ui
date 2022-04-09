import * as React from 'react';
import { Network } from '@beland/schemas';
import { HeaderProps } from '../Header/Header';
import './Bean.css';
export declare type BeanProps = {
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
    inline?: boolean;
    network?: Network;
    className?: string;
    children?: React.ReactChild;
};
export declare class Bean extends React.Component<BeanProps & HeaderProps> {
    static defaultProps: {
        className: string;
        network: Network;
    };
    render(): JSX.Element;
}
