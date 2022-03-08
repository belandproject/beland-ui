import * as React from 'react';
import { ProviderType } from '@dcl/schemas/dist/dapps/provider-type';
import { LoaderProps as BaseLoaderProps } from 'semantic-ui-react/dist/commonjs/elements/Loader/Loader';
import './Loader.css';
export interface LoaderProps extends BaseLoaderProps {
    provider?: ProviderType;
}
export declare class Loader extends React.PureComponent<LoaderProps> {
    getClassName(): string;
    render(): JSX.Element;
}
