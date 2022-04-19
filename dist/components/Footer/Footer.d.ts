import * as React from 'react';
import { LanguageDropdownProps } from '../LanguageDropdown/LanguageDropdown';
import { Locale } from '../Language/Language';
import './Footer.css';
export declare type FooterI18N = {
    title: any;
    links: any;
    content: any;
};
export declare type FooterProps = {
    locale?: Locale;
    locales?: Locale[];
    i18n?: FooterI18N;
    onChange?: LanguageDropdownProps['onChange'];
    isFullscreen?: boolean;
    className?: string;
};
export declare class Footer extends React.PureComponent<FooterProps> {
    static defaultProps: Partial<FooterProps>;
    render(): JSX.Element;
}
