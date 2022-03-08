import { Avatar } from '@dcl/schemas';
import * as React from 'react';
import './AvatarFace.css';
export declare type AvatarFaceProps = {
    avatar?: Avatar;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'responsive';
    inline?: boolean;
};
export declare class AvatarFace extends React.PureComponent<AvatarFaceProps> {
    static defaultProps: Partial<AvatarFaceProps>;
    render(): JSX.Element;
}
