import * as React from 'react';
import './WearablePreview.css';
declare type WearablePreviewProps = {
    contractAddress?: string;
    tokenId?: string;
    itemId?: string;
    profile?: string;
    urns?: string[];
    skin?: string;
    hair?: string;
    eyes?: string;
    emote?: `idle` | `clap` | `dab` | `dance` | `fashion` | `love` | `money`;
    bodyShape?: 'male' | 'female';
    zoom?: number;
    camera?: 'static' | 'interactive';
    dev?: boolean;
    baseUrl?: string;
    onLoad?: () => void;
    onError?: (error: Error) => void;
};
export declare class WearablePreview extends React.PureComponent<WearablePreviewProps> {
    static defaultProps: {
        dev: boolean;
        baseUrl: string;
        onLoad: () => void;
        onError: () => void;
    };
    iframe: HTMLIFrameElement | null;
    getUrl: () => string;
    handleMessage: (msgEvent: MessageEvent<string>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    refIframe: (iframe: HTMLIFrameElement | null) => void;
    render(): JSX.Element;
}
export {};
